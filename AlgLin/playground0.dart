import 'package:manim_web/manim.dart';

class MatrixTransformationScene extends Scene {
  //Camera createCamera({Color backgroundColor=});
  late Array transformationMatrix;
  late NumberPlane plane;
  late NumberPlane fadedPlane;
  late NumberPlane originalPlane;
  late Dot i;
  late Dot j;
  late Dot originalI;
  late Dot originalJ;
  late MathTex texI;
  late MathTex texJ;
  late Arrow arrowI;
  late Arrow arrowJ;
  late MathTex texMatrix;
  late Circle btn;
  late Camera camera;

  double planeScale = 2.25;

  @override
  FutureOr<void> preload() {
    MathTex.preload(r'\hat{\imath}');
    MathTex.preload(r'\hat{\jmath}');
  }

  @override
  Future construct() async {
    transformationMatrix = Array.identity(2);
    camera.backgroundColor=Color.FromHex('#191919');
    
      await createPlane();
      await createControls();
      makeInteractive();
      await continueRendering();
  }

  Future createPlane() async {
    var planeRadius = max(FRAME_X_RADIUS, FRAME_Y_RADIUS);

    originalPlane = NumberPlane(
        xMin: -planeRadius * planeScale,
        xMax: planeRadius * planeScale,
        yMin: -planeRadius * planeScale,
        yMax: planeRadius * planeScale,
        makeSmoothAfterApplyingFunctions: false);
    plane = originalPlane.copy();

    add([plane/*, originalPlane*/]);
  }

  Future createControls() async {
    originalI = Dot(originalPlane.c2p(RIGHT))..setColor(color: GREEN_C);
    originalJ = Dot(originalPlane.c2p(UP))..setColor(color: RED_C);

    var originPoint = originalPlane.c2p(ORIGIN);

    i = originalI.copy();
    j = originalJ.copy();

    arrowI = Arrow(start: originPoint, end: i.getPos(), buff: 0)
      ..setColor(color: GREEN_C);
    arrowJ = Arrow(start: originPoint, end: j.getPos(), buff: 0)
      ..setColor(color: RED_C);

    btn=Circle(radius: .2)..setFill(color: ORANGE)..toCorner(corner: UL);

    addTex();

    addToFront([i, j, arrowI, arrowJ, texI, texJ]);
    addToFront([btn]);
  }

  void addTex() {
    texI = MathTex(r'\hat{\imath}')
      ..setColor(color: GREEN_C)
      ..addUpdater(
          (m, dt) => m..nextToMobject(i, direction: UL, buffer: SMALL_BUFFER));
    texJ = MathTex(r'\hat{\jmath}')
      ..setColor(color: RED_C)
      ..addUpdater(
          (m, dt) => m..nextToMobject(j, direction: UL, buffer: SMALL_BUFFER));
  }

  Future transformPlane(List<List<double>> values) async {
    var matrix = Array(values: values);

    // assert values is a 2x2 matrix
    assert(listEqual(matrix.shape.toList(), [2, 2]));

    var p2 = plane.copy()..applyMatrix(matrix);

    transformationMatrix = matrix.matMul(transformationMatrix);

    var iPos = originalPlane.c2p(RIGHT).matMul(transformationMatrix);
    var jPos = originalPlane.c2p(UP).matMul(transformationMatrix);

    // update the position of i and j
    var i2 = i.copy()..moveToPoint(iPos);
    var j2 = j.copy()..moveToPoint(jPos);

    var originPoint = originalPlane.c2p(ORIGIN);
    var newArrowI = Arrow(start: originPoint, end: iPos, buff: 0)
      ..setColor(color: GREEN_C);
    var newArrowJ = Arrow(start: originPoint, end: jPos, buff: 0)
      ..setColor(color: RED_C);

    await playMany([
      Transform(i, target: i2),
      Transform(j, target: j2),
      Transform(arrowI, target: newArrowI),
      Transform(arrowJ, target: newArrowJ),
      Transform(plane, target: p2),
    ]);
  }

  void makeInteractive() {
    add([DraggableMobject(mob: i), DraggableMobject(mob: j), Button(mob: btn, onClick: restart)]);

    var planeUpdater = (Mobject mob, double dt) {
      var iPos = originalPlane.p2c(i.getCenter());
      var jPos = originalPlane.p2c(j.getCenter());

      var newPlane = originalPlane.copy()
        ..applyMatrix(Array(values: [
          [iPos.x, jPos.x],
          [iPos.y, jPos.y]
        ]));

      var originPoint = originalPlane.c2p(ORIGIN);
      var newArrowI = Arrow(start: originPoint, end: iPos, buff: 0)
        ..setColor(color: GREEN_C);
      var newArrowJ = Arrow(start: originPoint, end: jPos, buff: 0)
        ..setColor(color: RED_C);

      plane.become(newPlane);
      arrowI.become(newArrowI);
      arrowJ.become(newArrowJ);
      return mob;
    };

    i.addUpdater(planeUpdater);
    j.addUpdater(planeUpdater);
  }

   void restart(){
    var originPoint = originalPlane.c2p(ORIGIN);

    var newArrowI = Arrow(start: originPoint, end: i.getPos(), buff: 0)
      ..setColor(color: GREEN_C);
    var newArrowJ = Arrow(start: originPoint, end: j.getPos(), buff: 0)
      ..setColor(color: RED_C);
      var newPlane = originalPlane.copy();
      plane.become(newPlane);
      arrowI.become(newArrowI);
      arrowJ.become(newArrowJ);
    i.become(originalI.copy());
    j.become(originalJ.copy());
  }
}

Vector3 listToVector(List<double> l) =>
    l.length == 2 ? Vector3(l[0], l[1], 0) : Vector3(l[0], l[1], l[2]);