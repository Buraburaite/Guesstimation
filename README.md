# Guesstimation: Experiment in Test-Taking Psychology
[![Travis](https://img.shields.io/travis/rust-lang/rust.svg?style=flat-square)](https://github.com/Buraburaite/Guesstimation)

<i>Note: this site is mobile-only</i>

### Goals
This site allows users to take short World History quizzes (all questions are from Khan Academy: https://www.khanacademy.org/humanities/world-history). All questions are multiple-choice, but instead of selecting correct answers, users reject possibilities. Their answer is then chosen randomly from the remaining answer choices. This is meant to force users to focus on leveraging what they know instead of what they don't.

## Installation
### From source
In your preferred working directory, get a copy of this repository:<br>
```
git clone https://github.com/Buraburaite/Guesstimation
cd Guesstimation
```
Install any dependencies (you will need to install NodeJS in order to run this command):<br>
```
npm install
```
Finally, run the testing server. This is will start the program, and will refresh the program everytime any of the files specified in the gulpfile.js are changed:<br><br>
```
npm start
```
