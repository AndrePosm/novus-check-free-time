// Run experiment at the page where lodash (_) is defined: 
// https://lodash.com/docs/4.17.4
runLoopSpeedExperiment();

function speedExperiment(times) {
  console.log('times: ', times);
  console.time('_.times');
  _.times(times, ()=> {perform();});
  console.timeEnd('_.times');

  console.time('loop');
  for (i = 0; i < times; i++) {perform();}
  console.timeEnd('loop');

  console.time('fill null');
  Array(times).fill(null).forEach(()=> {perform();});
  console.timeEnd('fill null');

  console.time('fill undefined');
  Array(times).fill(undefined).forEach(()=> {perform();});
  console.timeEnd('fill undefined');

  console.time('apply');
  Array.apply(null, Array(times)).forEach(()=> {perform();})
  console.log('______');
}

function perform() {
  1+1;
}

function runLoopSpeedExperiment() {
  speedExperiment(12);
  speedExperiment(123);
  speedExperiment(1234);
  speedExperiment(12345);
  speedExperiment(123456);
  speedExperiment(1234567);
}