const {
  generateQuestions
} = require('./src/scripts/onStart/index');


const onAppStart = async () => {
  try {
    console.log('----> on start...');
    // await generateQuestions(1000);
  } catch (error) {
    console.log('---> on start Error: ');
    console.log(error)
  }
};

module.exports = { onAppStart };
