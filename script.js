const quizDataNovice = [
  {
    question: 'Chipped paint is usually the cause of?',
    a: 'Damage by the customer, weather or road conditions',
    b: 'Too many paint or primer coats',
    c: 'Unsanded repair areas and improperly mixed chemicals',
    d: 'all of the above',
    correct: 'd',
  },
  {
    question: 'What is the recomended flash time of an automotive paint?',
    a: 'The amount of time it takes to mix thourghly',
    b: 'The amount of time it takes before it can be sanded',
    c: 'The amount of time it takes before the next coat can be applied',
    d: 'The amount of time it takes to apply 3 coats',
    correct: 'c',
  },

  {
    question:
      'What is the recommended amount of clear coats needed for optimum coverage and durability? (hint: normally 3 coats for basecoat)',
    a: '3 coats',
    b: '8 coats',
    c: '6 coats',
    d: '2 coats',
    correct: 'a',
  },
  {
    question:
      'What is the best way to deal with a minor paint imperfection in the clearcoat?',
    a: 'Sand and Polish',
    b: 'Sand and Repaint',
    c: 'Primer and Repaint',
    d: 'Strip down to bare-metal and start again',
    correct: 'a',
  },
];

const quizDataEasy = [
  {
    question: 'what is the correct order of a normal refinishing process?',
    a: 'Sand, Repair, Primer, Wet-sand, Paint and Polish',
    b: 'Wet-sand, Mask and Paint',
    c: 'Repair, Primer, Dry-sand and Paint',
    d: 'all of the above',
    correct: 'd',
  },
  {
    question:
      'What is the best filler for a very small ding with a dime size (1.8cm) radius?',
    a: 'Lightweight Bondo',
    b: 'Glazing Putty',
    c: 'Heavy Premium Bondo',
    d: 'Industiral Strenght Fiber Glass',
    correct: 'b',
  },
  {
    question: 'For best color match possible?',
    a: 'Apply more clear coats',
    b: 'Match color to Popular Paint-code choice',
    c: 'Match color to Vin#, Paint-code and tint if necessary',
    d: 'Use more air pressure to alter shade of side tone',
    correct: 'c',
  },

  {
    question: 'Which sandpaper grit can be painted over without priming first?',
    a: '180gt',
    b: '24gt',
    c: '120gt',
    d: '320gt',
    correct: 'd',
  },
];

const quizDataHard = [
  {
    question:
      'Before applying body filler to the stripped repaired area, the metal surface must first be?',
    a: 'Cleaned, primed and painted',
    b: 'Cleaned and sanded with 320 grit or finer',
    c: 'Washed and sanded with scuff pad',
    d: 'Cleaned, primed and sanded with 180 grit or less',
    correct: 'd',
  },
  {
    question:
      'If the primer mix ratio is 4:1 and you have 8 parts/oz primer, how much hardener do you need?',
    a: '8oz, equal amount',
    b: '2oz, small amount',
    c: '4oz, half amount',
    d: '32oz, four times that amount',
    correct: 'b',
  },
  {
    question:
      'What causes "fish-eyes" or circular shaped chemical reactions in paint?',
    a: 'Lead Water',
    b: 'Oil, Scilicon Product Residue or Grease',
    c: 'Humidity',
    d: 'Not Enough Air-pressure',
    correct: 'b',
  },
  {
    question: 'Before primer or painting plastic you must first use?',
    a: '2K High-Build Primer',
    b: 'Plastic Adhesion Promoter',
    c: 'Flex Epoxy Primer',
    d: 'Wax/Grease Remover and Coarse Scuff Pad',
    correct: 'b',
  },
  {
    question: 'What is the best primer for metal adhesion?',
    a: '2K High Build',
    b: 'Adhesion promoter',
    c: 'Etching or Epoxy',
    d: 'Sealer',
    correct: 'c',
  },
];

const quizDataVeteran = [
  {
    question:
      'Which Restoration* shop will likely turn out the most quality work based off balance of talent? (Team of 6)',
    a: '1 painter, 3 bodymen, and 2 sheet-metal fabricators',
    b: '4 painters, 1 bodyman, and 1 sheet-metal fabricators',
    c: '1 painter, 1 bodymen and 4 sheet-metal fabricators',
    d: '3 painters, 2 bodymen, and 2 sheet-metal fabricators',
    correct: 'a',
  },
  {
    question:
      'What order of sandpaper grit is optimum for cuting mirror-like topcoat finish?',
    a: '600gt - 800gt - 1000gt - 1500gt',
    b: '1000gt - 1500gt - 2000gt - 2500gt',
    c: '600gt - 1000gt - 1500gt - 2000gt',
    d: '800gt - 1200gt - 2000gt - 3000gt',
    correct: 'b',
  },
  {
    question:
      'What sandpaper grit range is the safest to clear over when blending a metalic color into the next panel?',
    a: '1000gt - 2500gt',
    b: '600gt - 3000gt',
    c: '800gt - 1500gt',
    d: '320gt - 1000gt',
    correct: 'c',
  },
  {
    question:
      'Which Collision* shop has a healthy balance of technicians for optimal production flow? (Team of 10)',
    a: '4 painters, 2 bodymen, 1 prepper and 3 detail guys',
    b: '5 painters, 2 bodymen, 1 prepper and 2 detail guys',
    c: '2 painters, 5 bodymen, 2 preppers and 1 detail guy',
    d: '1 painter, 6 bodymen, 1 prepper and 2 detail guys',
    correct: 'c',
  },

  {
    question:
      'Between Paying Labor, Parts & Materials and Shop Overhead what is the most expensive part of a Repair Business Model?',
    a: 'Paying Technicans and Adminstators',
    b: 'Buying Replacement Parts & Paint Materials',
    c: 'Paying for Building, Utilities, Software, City Fees, Misc Expenses',
    d: 'Too close to call',
    correct: 'd',
  },
];
const avatarBg = {
  skull:
    'https://images.unsplash.com/photo-1616346704478-4b3a16f6fb19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGJvZHklMjBidWlsZGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
  robot:
    'https://images.unsplash.com/photo-1589254066213-a0c9dc853511?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cm9ib3R8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60',
  dog: 'https://images.unsplash.com/photo-1587790311640-50b019663f01?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHBpdGJ1bGx8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60',
  wheels:
    'https://images.unsplash.com/photo-1588613829042-211d280bc1cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHJpbXN8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60',
  car: 'https://images.unsplash.com/photo-1584343292021-f2d13cb7711a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hldmVsbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60',
  truck:
    'https://images.unsplash.com/photo-1579097647275-16b002cced9e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8amVlcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60',
};

// profile
const profile = document.getElementById('profile');
const avatarGroup = document.querySelectorAll('.group .avatar');
const themeGroup = document.querySelectorAll('.group .color');
const userInput = document.getElementById('user-name');
const currentName = document.getElementById('user');
const changeBtn = document.getElementById('change');

//Test
const homeBtn = document.getElementById('home-btn');
const restartBtn = document.getElementById('restart');
const quiz = document.getElementById('quiz');
const progressBar = document.getElementById('progress-bar');
const answerEls = document.querySelectorAll('.answer');
const questionEls = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

// Home page
const settingsBtn = document.getElementById('settings');
const optionsBtn = document.getElementById('options');
const levelBtn = document.querySelectorAll('.test');
const levelIcon = document.getElementById('level');
const introPage = document.querySelector('.intro-container');
const buttons = document.querySelectorAll('body button');
const quizPage = document.querySelector('.quiz-container');
const confettiEl = document.querySelector('.confetti-container');
const studyPage = document.querySelector('.study-container');
const studyBtn = document.getElementById('study');

// Study Page
const LoadQuizBtn = document.getElementById('load');
const goBackBtn = document.getElementById('go-back');

// Success Page
const successPage = document.querySelector('.success-container');
const correctTotal = document.querySelector('.correct-score');
const answerTotal = document.querySelector('.total-answer');
const countDwnTxt = document.querySelector('.count-down');
const nextChallangeBtn = document.getElementById('next');

// Failed Page
const failedPage = document.querySelector('.results-container');
const testScore = document.getElementById('testScore');
const testSize = document.getElementById('testLength');
const failedBtn = document.getElementById('failed');

// Buttons
const noviceTest = document.getElementById('novice');
const easyTest = document.getElementById('easy');
const hardTest = document.getElementById('hard');
const veteranTest = document.getElementById('veteran');
const logoBtn = document.getElementById('logo');

// Logic
const currentTest = '';
let level = 1;
let currentQuiz = 0;
let noviceScore = 0;
let easyScore = 0;
let hardScore = 0;
let veteranScore = 0;

user_score = 0;
userAcct_name = [];
userAcct_avatar = [];
userAcct_theme = [];
user_level = [];
novice_completed = [];
easy_completed = [];
hard_completed = [];
veteran_completed = [];

let iQUserData = JSON.parse(localStorage.getItem('UserIQProfile'));
let iQUserTestData = JSON.parse(localStorage.getItem('UserIQTest'));

const startBtn = document.getElementById('start');
const startScreen = document.getElementById('start-screen');

const startApp = () => startScreen.classList.toggle('out');
startBtn.addEventListener('click', startApp);
logoBtn.addEventListener('click', startApp);

const clearTheme = () => {
  document.body.classList.remove('dark');
  document.body.classList.remove('light');
  document.body.classList.remove('sunset');
};

// ********************************************************************** //

//                             REFRESH APP                                //

// ********************************************************************** //

currentName.textContent = 'Setup Profile';
const refreshApp = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });

  if (iQUserTestData !== null) {
    // avatar BG
    userAcct_avatar = iQUserData.profile_pic;
    const { skull, robot, dog, wheels, car, truck } = avatarBg;

    if (iQUserData.profile_pic.toLowerCase() == 'skull') {
      profile.style.backgroundImage = `url('${skull}')`;
    }
    if (iQUserData.profile_pic.toLowerCase() == 'robot') {
      profile.style.backgroundImage = `url('${robot}')`;
    }
    if (iQUserData.profile_pic.toLowerCase() == 'dog') {
      profile.style.backgroundImage = `url('${dog}')`;
    }
    if (iQUserData.profile_pic.toLowerCase() == 'wheels') {
      profile.style.backgroundImage = `url('${wheels}')`;
    }
    if (iQUserData.profile_pic.toLowerCase() == 'car') {
      profile.style.backgroundImage = `url('${car}')`;
    }
    if (iQUserData.profile_pic.toLowerCase() == 'truck') {
      profile.style.backgroundImage = `url('${truck}')`;
    }
  } else
    profile.style.backgroundImage = `url('https://images.unsplash.com/photo-1591278169757-deac26e49555?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXV0byUyMGJvZHklMjBzaG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60')`;

  // USER NAME

  if (iQUserData) {
    currentName.innerText = `${
      iQUserData.name.slice(0, 1).toUpperCase() +
      iQUserData.name.toLowerCase().split('').slice(1).join('')
    }`;
  }

  // USER THEME

  clearTheme();
  if (iQUserData == null) {
    document.body.classList.add('light');
    console.log('adding default theme');
  } else {
    if (iQUserData.color_theme.toLowerCase() == 'dark') {
      document.body.classList.add('dark');
    }
    if (iQUserData.color_theme.toLowerCase() == 'light') {
      document.body.classList.add('light');
    }
    if (iQUserData.color_theme.toLowerCase() == 'sunset') {
      document.body.classList.add('sunset');
    }
  }
  // USER TEST COMPLETED

  if (iQUserTestData !== null) {
    const {
      novice_results,
      easy_results,
      hard_results,
      veteran_results,
      user_level,
    } = iQUserTestData;

    levelIcon.innerText = user_level;

    console.log(user_score);
    console.log(user_level);

    if (iQUserTestData.novice_results == 'true') {
      novice_completed = true;
      // user_score++;
      noviceTest.classList.add('done');
    }
    if (iQUserTestData.easy_results == 'true') {
      easy_completed = true;
      // user_score++;
      easyTest.classList.add('done');
    }
    if (iQUserTestData.hard_results == 'true') {
      hard_completed = true;
      // user_score++;
      hardTest.classList.add('done');
    }
    if (iQUserTestData.veteran_results == 'true') {
      veteran_completed = true;
      // user_score++;
      veteranTest.classList.add('done');
    }
    // localStorage.setItem('user_level', user_score);
    // user_level = user_score;
    // console.log(user_score);
  }
};

if (localStorage.getItem('UserIQProfile') == null) {
  buttons.forEach((btn) => {
    btn.classList.add('slide-in');
  });
  changeBtn.innerText = 'Create Profile';
  optionsBtn.classList.add('show');
} else {
  refreshApp();
  changeBtn.innerText = 'Update Profile';
}
loadQuizApp();
function removePages() {
  successPage.classList.add('hide');
  studyPage.classList.add('hide');
  quizPage.classList.add('hide');
  confettiEl.classList.add('hide');
  introPage.classList.add('hide');
}

// ********************************************************************** //

//                            CREATE USER                                 //

// ********************************************************************** //
const updateUser = (e) => {
  e.preventDefault();
  changeName();

  // if (iQUserData !== null) {
  if (userAcct_avatar.toString() == '') {
    userAcct_avatar = iQUserData.profile_pic;
  }
  if (userAcct_theme.toString() == '') {
    userAcct_theme = iQUserData.color_theme;
  }
  if (userAcct_name.toString() == '') {
    userAcct_name = iQUserData.name;
  }
  // }

  let userData = {
    id: Date.now(),
    name: userAcct_name.toString(),
    profile_pic: userAcct_avatar.toString(),
    color_theme: userAcct_theme.toString(),
  };
  console.log(userData);
  localStorage.setItem('UserIQProfile', JSON.stringify(userData));
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

changeBtn.addEventListener('click', updateUser);
window.scrollTo({
  top: 0,
  behavior: 'smooth',
});
if (iQUserData !== null) {
  userAcct_avatar = iQUserData.profile_pic;
}

avatarGroup.forEach((av) => {
  av.addEventListener('click', () => {
    console.log(av.innerText.toLowerCase());
    localStorage.setItem(
      'profile_pic',
      JSON.stringify(av.innerText.toLowerCase())
    );
  });
});

themeGroup.forEach((theme) => {
  theme.addEventListener('click', () => {
    if (theme.id == 'dark') {
      localStorage.setItem('color_theme', JSON.stringify(theme));
    }
    if (theme.id == 'light') {
      localStorage.setItem('color_theme', JSON.stringify(theme));
    }
    if (theme.id == 'sunset') {
      localStorage.setItem('color_theme', JSON.stringify(theme));
    }
  });
});

// ********************************************************************** //

//                                 OPTIONS                                //

// ********************************************************************** //
avatarGroup.forEach((avatar) => {
  avatar.addEventListener('click', () => {
    avatarGroup.forEach((avatar) => {
      setTimeout(() => avatar.classList.add('passed'), 500);
      avatar.classList.remove('picked');
      avatar.classList.remove('passed');
    });
    setTimeout(() => avatar.classList.remove('passed'), 500);
    avatar.classList.add('picked');
  });
});
themeGroup.forEach((theme) => {
  theme.addEventListener('click', () => {
    themeGroup.forEach((theme) => {
      setTimeout(() => theme.classList.add('passed'), 500);
      theme.classList.remove('picked');
      theme.classList.remove('passed');
    });
    setTimeout(() => theme.classList.remove('passed'), 500);
    theme.classList.add('picked');
  });
});
// ********************************************************************** //

//                               CHANGE NAME                             //

// ********************************************************************** //

const changeName = (e) => {
  currentName.innerText = `${
    userInput.value.slice(0, 1).toUpperCase() +
    userInput.value.toLowerCase().split('').slice(1).join('')
  }`;
  userAcct_name = [];
  userAcct_name.push(currentName.innerText);
  optionsBtn.classList.remove('show');
};

settingsBtn.addEventListener('click', () => {
  optionsBtn.classList.toggle('show');

  if (optionsBtn.className !== 'options') {
    btnSlideOut();
    setTimeout(() => btnSlideIn(), 500);
  }
});

profile.addEventListener('click', () => {
  btnSlideOut();
  optionsBtn.classList.toggle('show');
  setTimeout(() => btnSlideIn(), 500);
});

// ********************************************************************** //

//                               ADD THEME                                //

// ********************************************************************** //

const pickTheme = () => {
  themeGroup.forEach((theme) => {
    theme.addEventListener('click', () => {
      clearTheme();
      userAcct_theme = [];
      userAcct_theme.push(theme.textContent);

      if (theme.id == 'dark') {
        document.body.classList.add('dark');
      }
      if (theme.id == 'light') {
        document.body.classList.add('light');
      }
      if (theme.id == 'sunset') {
        document.body.classList.add('sunset');
      }
    });
  });
};
pickTheme();

// ********************************************************************** //

//                            ADD PROFILE PIC                             //

// ********************************************************************** //
const changeProfile = () => {
  avatarGroup.forEach((avatar) => {
    avatar.addEventListener('click', () => {
      userAcct_avatar = [];
      userAcct_avatar.push(avatar.innerText);
      profile.innerHTML = '';
      profile.style.backgroundImage = avatar.style.backgroundImage;
    });
  });
};
changeProfile();

// ********************************************************************** //

//                            SHOW HOME SCREEN                           //

// ********************************************************************** //

function showIntro() {
  removePages();
  introPage.classList.remove('hide');
  btnSlideIn();
}

// ********************************************************************** //

//                              LOAD APP                                  //

// ********************************************************************** //

function loadQuizApp() {
  removePages();
  showIntro();

  studyBtn.addEventListener('click', () => {
    goBackBtn.addEventListener('click', () => loadQuizApp());
    removePages();
    studyPage.classList.remove('hide');
  });

  levelBtn.forEach((level) =>
    level.addEventListener('click', () => {
      progressBar.style = `width: 0%`;
      if (level.innerText.toLowerCase().includes('novice')) {
        removePages();
        quizPage.classList.remove('hide');
        loadQuizNovice();
      } else if (level.innerText.toLowerCase().includes('easy')) {
        loadQuizEasy();
      } else if (level.innerText.toLowerCase().includes('hard')) {
        loadQuizHard();
      } else if (level.innerText.toLowerCase().includes('veteran')) {
        loadQuizVeteran();
      }
    })
  );
}

// Button Slide-in
function btnSlideIn() {
  idx = 0;
  for (let i = 0; i < buttons.length; i++) {
    setTimeout(() => {
      buttons[i].classList.add('slide-in');
    }, i * 250);
  }
}
function btnSlideOut() {
  idx = 0;
  for (let i = 0; i < buttons.length; i++) {
    setTimeout(() => {
      buttons[i].classList.remove('slide-in');
    }, i * 150);
  }
}

LoadQuizBtn.addEventListener('click', () => {
  loadQuizApp();
  removePages();
  loadQuizNovice();
  quizPage.classList.remove('hide');
});

function loadQuizNovice() {
  level = 1;
  levelIcon.innerText = level;
  quizPage.style = `box-shadow: 0.2rem 0.4rem 0.6rem 0.2rem rgba(0, 0, 0, 0.2),
  0.2rem 0.4rem 0.6rem 100vmax rgb(74, 173, 82);`;

  deselectAnswers();
  let currentquizDataNovice = quizDataNovice[currentQuiz];

  questionEls.innerText = currentquizDataNovice.question;
  a_text.innerText = currentquizDataNovice.a;
  b_text.innerText = currentquizDataNovice.b;
  c_text.innerText = currentquizDataNovice.c;
  d_text.innerText = currentquizDataNovice.d;
}

function loadQuizEasy() {
  removePages();
  quizPage.classList.remove('hide');
  level = 2;
  levelIcon.innerText = level;
  quizPage.style = `box-shadow: 0.2rem 0.4rem 0.6rem 0.2rem rgba(0, 0, 0, 0.2),
  0.2rem 0.4rem 0.6rem 100vmax rgb(186, 188, 65);`;

  deselectAnswers();
  let currentquizDataEasy = quizDataEasy[currentQuiz];

  questionEls.innerText = currentquizDataEasy.question;
  a_text.innerText = currentquizDataEasy.a;
  b_text.innerText = currentquizDataEasy.b;
  c_text.innerText = currentquizDataEasy.c;
  d_text.innerText = currentquizDataEasy.d;
}

function loadQuizHard() {
  removePages();
  quizPage.classList.remove('hide');
  level = 3;
  levelIcon.innerText = level;
  quizPage.style = `box-shadow: 0.2rem 0.4rem 0.6rem 0.2rem rgba(0, 0, 0, 0.2),
  0.2rem 0.4rem 0.6rem 100vmax rgb(255, 125, 3);`;

  deselectAnswers();
  let currentquizDataHard = quizDataHard[currentQuiz];

  questionEls.innerText = currentquizDataHard.question;
  a_text.innerText = currentquizDataHard.a;
  b_text.innerText = currentquizDataHard.b;
  c_text.innerText = currentquizDataHard.c;
  d_text.innerText = currentquizDataHard.d;
}

function loadQuizVeteran() {
  removePages();
  quizPage.classList.remove('hide');
  level = 4;
  levelIcon.innerText = level;
  quizPage.style = `box-shadow: 0.2rem 0.4rem 0.6rem 0.2rem rgba(0, 0, 0, 0.2),
  0.2rem 0.4rem 0.6rem 100vmax indigo;`;

  deselectAnswers();
  let currentquizDataVeteran = quizDataVeteran[currentQuiz];

  questionEls.innerText = currentquizDataVeteran.question;
  a_text.innerText = currentquizDataVeteran.a;
  b_text.innerText = currentquizDataVeteran.b;
  c_text.innerText = currentquizDataVeteran.c;
  d_text.innerText = currentquizDataVeteran.d;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => (answerEl.checked = false));
}

function getSelected() {
  let answer;
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

progress = 0;
progressIdx = 1;

// ********************************************************************** //

//                            SUBMIT TEST ANSWERS                         //

// ********************************************************************** //

function submitAnswer() {
  submitBtn.addEventListener('click', () => {
    // ********************************************************************** //

    //                            UPDATE TESTS                                //

    // ********************************************************************** //

    const updateUserTest = () => {
      // e.preventDefault();
      let testData = {
        novice_results: novice_completed.toString(),
        easy_results: easy_completed.toString(),
        hard_results: hard_completed.toString(),
        veteran_results: veteran_completed.toString(),
        user_level: user_score.toString(),
      };
      console.log(testData);
      localStorage.setItem('UserIQTest', JSON.stringify(testData));
    };
    /// GO TO HOME SCREEN ///

    /// GET ANSWERS ///
    const answer = getSelected();

    /// lEVEL 1
    if (answer && level === 1) {
      homeBtn.addEventListener('click', () => {
        goHome(noviceTest);
      });
      getProgress(quizDataNovice);

      restartBtn.addEventListener('click', () => {
        restartQuiz(loadQuizNovice());
      });

      if (answer === quizDataNovice[currentQuiz].correct) {
        noviceScore++;
      }
      currentQuiz++;
      if (currentQuiz < quizDataNovice.length) {
        loadQuizNovice();
      } else {
        studyBtn.addEventListener('click', () => loadQuizApp());
        if (noviceScore === 4 && level === 1) {
          successCountDwn(noviceScore, quizDataNovice, noviceTest);
          novice_completed.push(true);
          // Storage //
          user_score = [];
          user_score.push(1);
          currentQuiz = 0;
          nextChallangeBtn.addEventListener(
            'click',
            () => loadQuizEasy(),
            updateUserTest()
          );
          console.log(user_score);
        } else {
          currentQuiz = 0;
          failedResults(noviceScore, quizDataNovice);
          noviceScore = 0;
        }
      }
    }
    /// LEVEL 2 ///

    if (answer && level === 2) {
      homeBtn.addEventListener('click', () => goHome(easyTest));

      getProgress(quizDataEasy);

      restartBtn.addEventListener('click', () => {
        restartQuiz(loadQuizEasy());
      });

      if (answer === quizDataEasy[currentQuiz].correct) {
        easyScore++;
      }
      currentQuiz++;
      if (currentQuiz < quizDataEasy.length) {
        loadQuizEasy();
      } else {
        studyBtn.addEventListener('click', () => loadQuizApp());
        if (easyScore === 4 && level === 2) {
          successCountDwn(easyScore, quizDataEasy, easyTest);
          easy_completed.push(true);
          //  storage
          user_score = [];
          user_score.push(2);
          updateUserTest();
          currentQuiz = 0;
          nextChallangeBtn.addEventListener('click', () => loadQuizHard());
        } else {
          failedResults(easyScore, quizDataEasy);
          easyScore = 0;
        }
      }
    }
    /// LEVEL 3 ///

    if (answer && level === 3) {
      homeBtn.addEventListener('click', () => goHome(hardTest));
      getProgress(quizDataHard);

      restartBtn.addEventListener('click', () => {
        restartQuiz(loadQuizHard());
      });

      if (answer === quizDataHard[currentQuiz].correct) {
        hardScore++;
      }
      currentQuiz++;
      if (currentQuiz < quizDataHard.length) {
        loadQuizHard();
      } else {
        studyBtn.addEventListener('click', () => loadQuizApp());
        if (hardScore === quizDataHard.length && level === 3) {
          successCountDwn(hardScore, quizDataHard, hardTest);
          //  storage
          hard_completed.push(true);
          user_score = [];
          user_score.push(3);
          updateUserTest();
          currentQuiz = 0;
          nextChallangeBtn.addEventListener('click', () => loadQuizVeteran());
        } else {
          failedResults(hardScore, quizDataHard);
          hardScore = 0;
        }
      }

      /// LEVEL 4 ///
    } else if (answer && level === 4) {
      homeBtn.addEventListener('click', () => goHome(veteranTest));

      getProgress(quizDataVeteran);

      restartBtn.addEventListener('click', () => {
        restartQuiz(loadQuizVeteran());
      });

      if (answer === quizDataVeteran[currentQuiz].correct) {
        veteranScore++;
      }
      currentQuiz++;
      if (currentQuiz < quizDataVeteran.length) {
        loadQuizVeteran();
      } else {
        studyBtn.addEventListener('click', () => loadQuizApp());
        if (veteranScore === quizDataVeteran.length && level === 4) {
          removePages();
          successPage.classList.remove('hide');
          correctTotal.innerText = veteranScore;
          answerTotal.innerText = quizDataVeteran.length;
          // Storage //
          user_score = [];
          user_score.push(4);
          veteran_completed.push(true);
          updateUserTest();
          veteranTest.classList.add('done');
          veteranScore = 4;
          successPage.childNodes[5].innerText = `Congrats!! you are apart of an elite group of Automotive Gurus`;
        } else {
          failedResults(veteranScore, quizDataVeteran);
          veteranScore = 0;
        }
      }
    }
  });

  function failedResults(score, data) {
    removePages();
    failedPage.classList.add('show');
    testScore.innerText = score;
    testSize.innerText = data.length;
    failedBtn.addEventListener('click', () => {
      tryAgain();
    });
  }
  function goHome(test) {
    homeBtn.addEventListener('click', () => {
      // test.classList.add('finish');
      showIntro();
      tryAgain();
    });
  }
}

// ********************************************************************** //

//                         QUIZ NAV OPTIONS                               //

// ********************************************************************** //

homeBtn.addEventListener('click', () => {
  level = 0;
  showIntro();
});

function restartQuiz(start) {
  currentQuiz = 0;
  progressIdx = 1;
  progress = 25;
  progressBar.style = `width:${progressIdx * progress}%`;
  start;
  if (level == 1) {
    noviceScore = 0;
  }
  if (level == 2) {
    easyScore = 0;
  }
  if (level == 3) {
    hardScore = 0;
  }
  if (level == 4) {
    veteranScore = 0;
  }
}

function tryAgain() {
  currentQuiz = 0;
  progressIdx = 1;
  progress = 25;
  progressBar.style = `width:${progressIdx * progress}%`;
  failedPage.classList.remove('show');
  showIntro();
  loadQuizApp();
}

submitAnswer();

//************* SUCCESS *************//
function successCountDwn(score, data, btn) {
  removePages();
  successPage.classList.remove('hide');
  correctTotal.innerText = score;
  answerTotal.innerText = data.length;
  setTimeout(() => {
    setTimeout(() => {
      setTimeout(() => {
        setTimeout(() => {
          countDwnTxt.innerText = 1;
        }, 1000);
        countDwnTxt.innerText = 2;
        confettiEl.classList.add('hide');
      }, 1000);
      countDwnTxt.innerText = 3;
      countDwnTxt.style.color = 'red';
    }, 1000);
    countDwnTxt.innerText = 'Ready';
    countDwnTxt.style.color = 'green';
    confettiEl.classList.remove('hide');
  }, 0);
  setTimeout(() => {
    btn.classList.add('done');
    Score = 4;
    countDwnTxt.innerText = '';
    nextChallangeBtn.classList.add('show');
    successPage.childNodes[5].innerText = '';
    homeBtn.addEventListener('click', () => showIntro());
    progressBar.style = `width: 0%`;
    progressIdx = 1;
  }, 4000);
}

function getProgress(data) {
  progress = 100 / data.length;
  progressBar.style = `width:${progressIdx * progress}%`;
  progressIdx++;
}
if (iQUserData == null) {
  refreshApp();
}
