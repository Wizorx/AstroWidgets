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
  late Tex texReset;
  late MathTex tex1;
  late MathTex tex2;
  late MathTex tex3;
  late Arrow arrowI;
  late Arrow arrowJ;
  late MathTex texMatrix;
  late Circle resetBtn;
  late Circle btn1;
  late Circle btn2;
  late Circle btn3;
  late Camera camera;

  double planeScale = 2.25;

  @override
  FutureOr<void> preload() {
    MathTex.preload(r'\hat{\imath}');
    MathTex.preload(r'\hat{\jmath}');
    Tex.preload(r'Reset');
    MathTex.preload(r'1');
    MathTex.preload(r'2');
    MathTex.preload(r'3');
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
    resetBtn=Circle(radius: .2)..setFill(color: ORANGE)..shift(DOWN*3.25+LEFT*6);
    btn1=Circle(radius: .2)..setFill(color: ORANGE)..shift(DOWN*3.25+LEFT*3);
    btn2=Circle(radius: .2)..setFill(color: ORANGE)..shift(DOWN*3.25+RIGHT*3);
    btn3=Circle(radius: .2)..setFill(color: ORANGE)..shift(DOWN*3.25+RIGHT*6);
    
    var originPoint = originalPlane.c2p(ORIGIN);

    i = originalI.copy();
    j = originalJ.copy();

    arrowI = Arrow(start: originPoint, end: i.getPos(), buff: 0)
      ..setColor(color: GREEN_C);
    arrowJ = Arrow(start: originPoint, end: j.getPos(), buff: 0)
      ..setColor(color: RED_C);

    addTex();

    addToFront([i, arrowI, j, arrowJ, texI, texJ, tex1,tex2,tex3,texReset]);
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

    texReset = Tex(r'Reset')..moveToPoint(resetBtn.getCenter())..shift(DOWN*.5);
    tex1 = MathTex(r'1')..moveToPoint(btn1.getCenter());
    tex2 = MathTex(r'2')..moveToPoint(btn2.getCenter());
    tex3 = MathTex(r'3')..moveToPoint(btn3.getCenter());
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
    add([DraggableMobject(mob: i), DraggableMobject(mob: j),
     Button(mob: resetBtn, onClick: restart),
     Button(mob: btn1, onClick: ColinearNotNull),
     Button(mob: btn2, onClick: Colinear1Null),
     Button(mob: btn3, onClick: Colinear2Null)
     ]);

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

   void ColinearNotNull(){
    var originPoint = originalPlane.c2p(ORIGIN);
    var x1 = random.nextInt(7-(-6))+(-6)+random.nextDouble();
    var y1 = random.nextInt(5-(-4))+(-4)+random.nextDouble();
    if (x1==0){
      x1 = random.nextInt(7-(-6))+(-6)+random.nextDouble();
    }
    if (y1==0){
      y1 = random.nextInt(5-4)+random.nextDouble();
    }
    var coeff1 = random.nextDouble();
    var coeff2 = random.nextDouble();
    var iPos = originalPlane.c2p(RIGHT*coeff1*x1+UP*coeff1*y1).matMul(transformationMatrix);
    var jPos = originalPlane.c2p(RIGHT*coeff2*x1+UP*coeff2*y1).matMul(transformationMatrix);

    // update the position of i and j
    var i2 = i.copy()..moveToPoint(iPos);
    var j2 = j.copy()..moveToPoint(jPos);

    var newArrowI = Arrow(start: originPoint, end: i.getPos(), buff: 0)
      ..setColor(color: GREEN_C);
    var newArrowJ = Arrow(start: originPoint, end: j.getPos(), buff: 0)
      ..setColor(color: RED_C);
      var newPlane = originalPlane.copy();
      plane.become(newPlane);
      arrowI.become(newArrowI);
      arrowJ.become(newArrowJ);
    i.become(i2.copy());
    j.become(j2.copy());
  }

   void Colinear1Null(){
    var originPoint = originalPlane.c2p(ORIGIN);
    var x1 = random.nextInt(7-(-6))+(-6)+random.nextDouble();
    var y1 = random.nextInt(5-(-4))+(-4)+random.nextDouble();
    if (x1==0){
      x1 = random.nextInt(7-(-6))+(-6)+random.nextDouble();
    }
    if (y1==0){
      y1 = random.nextInt(5-4)+random.nextDouble();
    }
    var coeff1 = random.nextDouble();
    var coeff2 = random.nextDouble();
    var isNulli = random.nextBool();
    var isNullj = random.nextBool();

    while (isNulli == isNullj){
      isNulli = random.nextBool();
      isNullj = random.nextBool();
      }
    if (isNulli){
      coeff1=0;
    }
    if (isNullj){
      coeff2=0;
    }
    var iPos = originalPlane.c2p(RIGHT*coeff1*x1+UP*coeff1*y1).matMul(transformationMatrix);
    var jPos = originalPlane.c2p(RIGHT*coeff2*x1+UP*coeff2*y1).matMul(transformationMatrix);

    // update the position of i and j
    var i2 = i.copy()..moveToPoint(iPos);
    var j2 = j.copy()..moveToPoint(jPos);

    var newArrowI = Arrow(start: originPoint, end: i.getPos(), buff: 0)
      ..setColor(color: GREEN_C);
    var newArrowJ = Arrow(start: originPoint, end: j.getPos(), buff: 0)
      ..setColor(color: RED_C);
      var newPlane = originalPlane.copy();
      plane.become(newPlane);
      arrowI.become(newArrowI);
      arrowJ.become(newArrowJ);
    i.become(i2.copy());
    j.become(j2.copy());
  }
   void Colinear2Null(){
    var originPoint = originalPlane.c2p(ORIGIN);
    var i2 = i.copy()..moveToPoint(originPoint);
    var j2 = j.copy()..moveToPoint(originPoint);

    var newArrowI = Arrow(start: originPoint, end: i.getPos(), buff: 0)
      ..setColor(color: GREEN_C);
    var newArrowJ = Arrow(start: originPoint, end: j.getPos(), buff: 0)
      ..setColor(color: RED_C);
      var newPlane = originalPlane.copy();
      plane.become(newPlane);
      arrowI.become(newArrowI);
      arrowJ.become(newArrowJ);
    i.become(i2.copy());
    j.become(j2.copy());
  }
}

Vector3 listToVector(List<double> l) =>
    l.length == 2 ? Vector3(l[0], l[1], 0) : Vector3(l[0], l[1], l[2]);