'use strict';

// Основные игровые данные: раунды, категории, вопросы и финальные темы.
const GAME_DATA = {
  title: 'Своя игра: География России',
  rounds: [
    {
      id: 'round-1',
      title: 'Раунд 1',
      description: 'Базовые вопросы по карте России, городам, рекам и регионам.',
      values: [100, 200, 300, 400, 500],
      categories: [
        {
          title: 'Города России',
          questions: [
            {
              value: 100,
              question: 'Этот город на Неве был столицей России с 1712 по 1918 год.',
              answer: 'Санкт-Петербург.'
            },
            {
              value: 200,
              question: 'Назовите административный центр Краснодарского края.',
              answer: 'Краснодар.'
            },
            {
              value: 300,
              question: 'Этот город стоит на Волге и известен Мамаевым курганом.',
              answer: 'Волгоград.'
            },
            {
              value: 400,
              question: 'Столица Республики Татарстан.',
              answer: 'Казань.'
            },
            {
              value: 500,
              type: 'auction',
              note: 'Команды торгуются за право ответа. Победитель аукциона отвечает один.',
              question: 'Этот город часто называют столицей Урала.',
              answer: 'Екатеринбург.'
            }
          ]
        },
        {
          title: 'Реки и озёра',
          questions: [
            {
              value: 100,
              question: 'Самое глубокое озеро мира, расположенное в России.',
              answer: 'Байкал.'
            },
            {
              value: 200,
              question: 'Река, протекающая через Москву.',
              answer: 'Москва-река.'
            },
            {
              value: 300,
              question: 'Крупнейшая река европейской части России, впадающая в Каспийское море.',
              answer: 'Волга.'
            },
            {
              value: 400,
              question: 'Река, на которой стоит Новосибирск.',
              answer: 'Обь.'
            },
            {
              value: 500,
              question: 'Крупнейшее озеро Европы, расположенное на северо-западе России.',
              answer: 'Ладожское озеро.'
            }
          ]
        },
        {
          title: 'Горы и вершины',
          questions: [
            {
              value: 100,
              question: 'Высочайшая вершина России и всей Европы.',
              answer: 'Эльбрус.'
            },
            {
              value: 200,
              question: 'Горная система, разделяющая Европу и Азию.',
              answer: 'Уральские горы.'
            },
            {
              value: 300,
              question: 'Полуостров России, знаменитый множеством действующих вулканов.',
              answer: 'Камчатка.'
            },
            {
              value: 400,
              question: 'Высшая точка Алтая на территории России.',
              answer: 'Белуха.'
            },
            {
              value: 500,
              question: 'Название крупной горной системы, где находится Эльбрус.',
              answer: 'Большой Кавказ.'
            }
          ]
        },
        {
          title: 'Моря и берега',
          questions: [
            {
              value: 100,
              question: 'Море, на берегу которого расположен Сочи.',
              answer: 'Чёрное море.'
            },
            {
              value: 200,
              question: 'Главное море Калининградской области.',
              answer: 'Балтийское море.'
            },
            {
              value: 300,
              question: 'Море, благодаря которому Мурманск остаётся важным незамерзающим портом.',
              answer: 'Баренцево море.'
            },
            {
              value: 400,
              question: 'Северное море, в которое впадают Обь и Енисей.',
              answer: 'Карское море.'
            },
            {
              value: 500,
              question: 'Море, которое омывает Сахалин с востока.',
              answer: 'Охотское море.'
            }
          ]
        },
        {
          title: 'Карта регионов',
          questions: [
            {
              value: 100,
              question: 'Край, в котором расположен город Сочи.',
              answer: 'Краснодарский край.'
            },
            {
              value: 200,
              question: 'Регион России, столицей которого является Якутск.',
              answer: 'Республика Саха (Якутия).'
            },
            {
              value: 300,
              type: 'cat',
              note: 'Кот в мешке: выбирающая команда передаёт вопрос соперникам и назначает стоимость.',
              question: 'Этот регион России является балтийским эксклавом и не имеет общей сухопутной границы с основной территорией страны.',
              answer: 'Калининградская область.'
            },
            {
              value: 400,
              question: 'Регион России, административный центр которого — Петропавловск-Камчатский.',
              answer: 'Камчатский край.'
            },
            {
              value: 500,
              question: 'Единственная автономная область России, административный центр которой — Биробиджан.',
              answer: 'Еврейская автономная область.'
            }
          ]
        }
      ]
    },
    {
      id: 'round-2',
      title: 'Раунд 2',
      description: 'Усложнённый раунд: Дальний Восток, Арктика, республики и маршруты.',
      values: [200, 400, 600, 800, 1000],
      categories: [
        {
          title: 'Дальний Восток',
          questions: [
            {
              value: 200,
              question: 'Эта река во многом образует границу России и Китая на Дальнем Востоке.',
              answer: 'Амур.'
            },
            {
              value: 400,
              question: 'Крупнейший остров России.',
              answer: 'Сахалин.'
            },
            {
              value: 600,
              question: 'Полуостров России, где находится знаменитая Долина гейзеров.',
              answer: 'Камчатка.'
            },
            {
              value: 800,
              question: 'Административный центр Приморского края.',
              answer: 'Владивосток.'
            },
            {
              value: 1000,
              question: 'Самая восточная точка материковой части России — это мыс ...',
              answer: 'Мыс Дежнёва.'
            }
          ]
        },
        {
          title: 'Сибирь и Арктика',
          questions: [
            {
              value: 200,
              question: 'Крупнейший по населению город Сибири.',
              answer: 'Новосибирск.'
            },
            {
              value: 400,
              question: 'Как называется морской путь вдоль арктического побережья России?',
              answer: 'Северный морской путь.'
            },
            {
              value: 600,
              question: 'Полуостров, с названием которого связан Таймырский район и суровые арктические пейзажи.',
              answer: 'Таймыр.'
            },
            {
              value: 800,
              question: 'Полуостров, давший название Ямало-Ненецкому автономному округу.',
              answer: 'Ямал.'
            },
            {
              value: 1000,
              type: 'auction',
              note: 'Аукцион: ведущий задаёт победителя торгов и размер ставки.',
              question: 'Архипелаг между Баренцевым и Карским морями, название которого знакомо каждому по школьным атласам России.',
              answer: 'Новая Земля.'
            }
          ]
        },
        {
          title: 'Путешествия по России',
          questions: [
            {
              value: 200,
              question: 'Железнодорожная магистраль, соединяющая Москву и Владивосток.',
              answer: 'Транссибирская магистраль, или Транссиб.'
            },
            {
              value: 400,
              question: 'Крупнейший остров Байкала.',
              answer: 'Ольхон.'
            },
            {
              value: 600,
              question: 'Какой канал дал Москве неофициальное название «порт пяти морей»?',
              answer: 'Канал имени Москвы.'
            },
            {
              value: 800,
              type: 'cat',
              note: 'Кот в мешке: вопрос достаётся сопернику по выбору команды, открывшей клетку.',
              question: 'Город-курорт у подножия Машука, входящий в регион Кавказских Минеральных Вод.',
              answer: 'Пятигорск.'
            },
            {
              value: 1000,
              question: 'Крупный город на Волге, стоящий у места впадения Оки.',
              answer: 'Нижний Новгород.'
            }
          ]
        },
        {
          title: 'Народы и республики',
          questions: [
            {
              value: 200,
              question: 'Столица Республики Бурятия.',
              answer: 'Улан-Удэ.'
            },
            {
              value: 400,
              question: 'Республика России на Северном Кавказе, столицей которой является Махачкала.',
              answer: 'Дагестан, или Республика Дагестан.'
            },
            {
              value: 600,
              question: 'Республика России, в названии которой обычно рядом употребляют слово «Якутия».',
              answer: 'Республика Саха (Якутия).'
            },
            {
              value: 800,
              question: 'Столица Республики Карелия.',
              answer: 'Петрозаводск.'
            },
            {
              value: 1000,
              question: 'Республика Северного Кавказа, на территории которой находится северный склон Эльбруса.',
              answer: 'Кабардино-Балкария, или Кабардино-Балкарская Республика.'
            }
          ]
        },
        {
          title: 'Природа и символы',
          questions: [
            {
              value: 200,
              question: 'Природная зона хвойных лесов, занимающая огромные пространства России.',
              answer: 'Тайга.'
            },
            {
              value: 400,
              question: 'Единственная река, вытекающая из Байкала.',
              answer: 'Ангара.'
            },
            {
              value: 600,
              question: 'Знаменитые каменные столбы в Республике Коми, входящие в список семи чудес России.',
              answer: 'Столбы выветривания Маньпупунёр.'
            },
            {
              value: 800,
              question: 'Камчатский заповедник, где находится Долина гейзеров.',
              answer: 'Кроноцкий заповедник.'
            },
            {
              value: 1000,
              question: 'Полуостров на севере европейской части России, где расположен Мурманск.',
              answer: 'Кольский полуостров.'
            }
          ]
        }
      ]
    }
  ],
  finalThemes: [
    {
      id: 'final-1',
      title: 'Арктика',
      question: 'Этот город России считается крупнейшим городом мира, расположенным за Северным полярным кругом.',
      answer: 'Мурманск.'
    },
    {
      id: 'final-2',
      title: 'Волга',
      question: 'Назовите город, который стоит у места впадения Оки в Волгу.',
      answer: 'Нижний Новгород.'
    },
    {
      id: 'final-3',
      title: 'Границы',
      question: 'С какой страной Россия имеет самую длинную сухопутную границу?',
      answer: 'С Казахстаном.'
    },
    {
      id: 'final-4',
      title: 'Вершины',
      question: 'Как называется высочайшая вершина Сибири?',
      answer: 'Белуха.'
    },
    {
      id: 'final-5',
      title: 'Моря',
      question: 'Какое море омывает Владивосток?',
      answer: 'Японское море.'
    },
    {
      id: 'final-6',
      title: 'Озёра',
      question: 'Какое озеро является крупнейшим в Европе по площади?',
      answer: 'Ладожское озеро.'
    },
    {
      id: 'final-7',
      title: 'Маршруты',
      question: 'Какой город считается восточной конечной точкой Транссибирской магистрали?',
      answer: 'Владивосток.'
    }
  ]
};

// Ключ сохранения и базовые настройки интерфейса.
const STORAGE_KEY = 'svoya-igra-russia-school-v2';
const MAX_LOG_ITEMS = 90;
const DEFAULT_TEAM_NAMES = ['Команда 1', 'Команда 2', 'Команда 3'];

// Синтезированные звуки не требуют внешних файлов и работают офлайн.
const DEFAULT_SETTINGS = {
  soundEnabled: true,
  uiSounds: true,
  typingSounds: true,
  resultSounds: true,
  volume: 55
};

// Главные DOM-элементы приложения.
const menuScreen = document.getElementById('menuScreen');
const setupScreen = document.getElementById('setupScreen');
const gameScreen = document.getElementById('gameScreen');
const menuMeta = document.getElementById('menuMeta');
const continueGameBtn = document.getElementById('continueGameBtn');
const phaseLabel = document.getElementById('phaseLabel');
const teamsPanel = document.getElementById('teamsPanel');
const roundSummary = document.getElementById('roundSummary');
const globalControls = document.getElementById('globalControls');
const eventLog = document.getElementById('eventLog');
const boardPanel = document.getElementById('boardPanel');
const cluePanel = document.getElementById('cluePanel');
const finalPanel = document.getElementById('finalPanel');
const clueModal = document.getElementById('clueModal');
const finalModal = document.getElementById('finalModal');
const settingsModal = document.getElementById('settingsModal');
const setupNote = document.getElementById('setupNote');
const startGameBtn = document.getElementById('startGameBtn');
const setupTeamInputs = [...document.querySelectorAll('[data-setup-team]')];
const settingsSoundEnabled = document.getElementById('settingsSoundEnabled');
const settingsUiSounds = document.getElementById('settingsUiSounds');
const settingsTypingSounds = document.getElementById('settingsTypingSounds');
const settingsResultSounds = document.getElementById('settingsResultSounds');
const settingsVolume = document.getElementById('settingsVolume');
const settingsVolumeValue = document.getElementById('settingsVolumeValue');

// Отдельное UI-состояние для модальных окон.
const uiState = {
  settingsOpen: false
};

let state = loadState();
let audioContext = null;
let lastTypeSoundAt = 0;

attachGlobalEvents();
render();

// Все клики и изменения обрабатываются централизованно, чтобы код было проще поддерживать.
function attachGlobalEvents() {
  document.addEventListener('click', (event) => {
    const clickedButton = event.target.closest('button');
    if (clickedButton && !clickedButton.disabled) {
      playSound('click');
    }

    const actionElement = event.target.closest('[data-action]');
    if (!actionElement) {
      if (event.target === settingsModal) {
        uiState.settingsOpen = false;
        renderSettings();
      }
      return;
    }

    const action = actionElement.dataset.action;

    if (action === 'open-setup') {
      state.screen = 'setup';
      saveState();
      playSound('transition');
      render();
      return;
    }

    if (action === 'continue-game') {
      state.screen = 'game';
      saveState();
      playSound('transition');
      render();
      return;
    }

    if (action === 'go-menu') {
      state.screen = 'menu';
      uiState.settingsOpen = false;
      saveState();
      playSound('transition');
      render();
      return;
    }

    if (action === 'open-settings') {
      uiState.settingsOpen = true;
      renderSettings();
      return;
    }

    if (action === 'close-settings') {
      uiState.settingsOpen = false;
      renderSettings();
      return;
    }

    if (action === 'start-game') {
      startGameFromSetup();
      return;
    }

    if (action === 'export-protocol') {
      exportProtocol();
      return;
    }

    if (action === 'reset-game') {
      resetToSetup();
      return;
    }

    if (action === 'open-clue') {
      openClue(Number(actionElement.dataset.roundIndex), Number(actionElement.dataset.categoryIndex), Number(actionElement.dataset.questionIndex));
      return;
    }

    if (action === 'set-control-team') {
      setControlTeam(Number(actionElement.dataset.teamId), true);
      commit();
      return;
    }

    if (action === 'apply-adjustment') {
      applyManualAdjustment(Number(actionElement.dataset.teamId), actionElement.dataset.mode);
      return;
    }

    if (action === 'reveal-answer') {
      if (!state.currentClue) {
        return;
      }
      state.currentClue.showAnswer = true;
      commit();
      return;
    }

    if (action === 'reveal-final-answer') {
      state.final.showAnswer = true;
      commit();
      return;
    }

    if (action === 'close-clue') {
      finalizeClue('Вопрос закрыт без изменения счёта.');
      return;
    }

    if (action === 'no-answer') {
      finalizeClue('Никто не ответил на вопрос.');
      return;
    }

    if (action === 'standard-correct') {
      resolveStandardClue(Number(actionElement.dataset.teamId), true);
      return;
    }

    if (action === 'standard-wrong') {
      resolveStandardClue(Number(actionElement.dataset.teamId), false);
      return;
    }

    if (action === 'set-auction-team') {
      if (!state.currentClue) {
        return;
      }
      state.currentClue.auctionTeamId = Number(actionElement.dataset.teamId);
      state.currentClue.wager = getSuggestedAuctionWager(state.currentClue.auctionTeamId);
      commit();
      return;
    }

    if (action === 'set-cat-recipient') {
      if (!state.currentClue) {
        return;
      }
      state.currentClue.recipientTeamId = Number(actionElement.dataset.teamId);
      commit();
      return;
    }

    if (action === 'set-cat-cost') {
      if (!state.currentClue) {
        return;
      }
      state.currentClue.catCost = Number(actionElement.dataset.value);
      commit();
      return;
    }

    if (action === 'auction-correct' || action === 'auction-wrong') {
      resolveAuction(action === 'auction-correct');
      return;
    }

    if (action === 'cat-correct' || action === 'cat-wrong') {
      resolveCat(action === 'cat-correct');
      return;
    }

    if (action === 'next-round') {
      advanceRound();
      return;
    }

    if (action === 'start-final') {
      startFinal();
      return;
    }

    if (action === 'remove-theme') {
      removeFinalTheme(actionElement.dataset.themeId);
      return;
    }

    if (action === 'confirm-wagers') {
      confirmFinalWagers();
      return;
    }

    if (action === 'set-final-response') {
      setFinalResponse(Number(actionElement.dataset.teamId), actionElement.dataset.response);
      return;
    }

    if (action === 'finish-game') {
      finishGame();
    }
  });

  document.addEventListener('input', (event) => {
    const target = event.target;

    if (target.matches('[data-setup-team]')) {
      const teamId = Number(target.dataset.setupTeam);
      const fallback = DEFAULT_TEAM_NAMES[teamId];
      state.teams[teamId].name = sanitizeTeamName(target.value, fallback);
      saveState();
      return;
    }

    if (target === settingsVolume) {
      state.settings.volume = Number(settingsVolume.value);
      saveState();
      renderSettings();
      return;
    }
  });

  document.addEventListener('change', (event) => {
    const target = event.target;

    if (target === settingsSoundEnabled) {
      state.settings.soundEnabled = settingsSoundEnabled.checked;
      saveState();
      renderSettings();
      return;
    }

    if (target === settingsUiSounds) {
      state.settings.uiSounds = settingsUiSounds.checked;
      saveState();
      renderSettings();
      return;
    }

    if (target === settingsTypingSounds) {
      state.settings.typingSounds = settingsTypingSounds.checked;
      saveState();
      renderSettings();
      return;
    }

    if (target === settingsResultSounds) {
      state.settings.resultSounds = settingsResultSounds.checked;
      saveState();
      renderSettings();
      return;
    }

    if (target.matches('#auctionWagerInput')) {
      if (!state.currentClue) {
        return;
      }
      state.currentClue.wager = Number(target.value) || 0;
      commit();
      return;
    }

    if (target.matches('#catCostInput')) {
      if (!state.currentClue) {
        return;
      }
      state.currentClue.catCost = Number(target.value) || 0;
      commit();
      return;
    }

    if (target.matches('[data-final-wager]')) {
      const teamId = Number(target.dataset.finalWager);
      state.final.wagers[teamId] = Math.max(0, Number(target.value) || 0);
      commit();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && uiState.settingsOpen) {
      uiState.settingsOpen = false;
      renderSettings();
      return;
    }

    if (!shouldPlayTypingSound(event)) {
      return;
    }

    const now = Date.now();
    if (now - lastTypeSoundAt < 40) {
      return;
    }

    lastTypeSoundAt = now;
    playSound('type');
  });
}

// Создаем полностью новое состояние игры, но с возможностью сохранить имена команд и настройки.
function createInitialState(teamNames = DEFAULT_TEAM_NAMES, screen = 'menu', openingLog = 'Игра готова.') {
  return {
    screen,
    teams: teamNames.map((name, index) => createTeam(index, sanitizeTeamName(name, DEFAULT_TEAM_NAMES[index]))),
    currentRoundIndex: 0,
    phase: 'board',
    controlTeamId: 0,
    usedClues: buildUsedClues(),
    currentClue: null,
    log: [createLogEntry(openingLog)],
    final: createInitialFinalState(),
    settings: { ...DEFAULT_SETTINGS }
  };
}

function createInitialFinalState() {
  return {
    activeTeamIds: [],
    turnQueue: [],
    turnIndex: 0,
    removedThemeIds: [],
    selectedThemeId: null,
    wagers: {},
    responses: {},
    showAnswer: false
  };
}

function createTeam(id, name) {
  return {
    id,
    name,
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0
  };
}

function buildUsedClues() {
  return GAME_DATA.rounds.map((round) => round.categories.map((category) => category.questions.map(() => false)));
}

// Загружаем сохраненную партию, если она есть.
function loadState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) {
      return createInitialState();
    }
    return normalizeState(JSON.parse(saved));
  } catch (error) {
    console.error(error);
    return createInitialState();
  }
}

// Нормализация защищает игру от старого или неполного состояния в localStorage.
function normalizeState(candidate) {
  const fallback = createInitialState();
  if (!candidate || typeof candidate !== 'object') {
    return fallback;
  }

  const teamNames = Array.isArray(candidate.teams)
    ? candidate.teams.map((team, index) => sanitizeTeamName(team.name, DEFAULT_TEAM_NAMES[index] || `Команда ${index + 1}`))
    : DEFAULT_TEAM_NAMES;

  const normalizedTeams = DEFAULT_TEAM_NAMES.map((defaultName, index) => {
    const source = candidate.teams?.[index] || {};
    return {
      id: index,
      name: sanitizeTeamName(source.name, teamNames[index] || defaultName),
      score: Number(source.score) || 0,
      correctAnswers: Number(source.correctAnswers) || 0,
      wrongAnswers: Number(source.wrongAnswers) || 0
    };
  });

  return {
    screen: ['menu', 'setup', 'game'].includes(candidate.screen) ? candidate.screen : 'menu',
    teams: normalizedTeams,
    currentRoundIndex: Number.isInteger(candidate.currentRoundIndex) ? clamp(candidate.currentRoundIndex, 0, GAME_DATA.rounds.length - 1) : 0,
    phase: candidate.phase || 'board',
    controlTeamId: Number.isInteger(candidate.controlTeamId) ? clamp(candidate.controlTeamId, 0, 2) : 0,
    usedClues: Array.isArray(candidate.usedClues) ? candidate.usedClues : buildUsedClues(),
    currentClue: candidate.currentClue || null,
    log: Array.isArray(candidate.log) && candidate.log.length ? candidate.log.slice(0, MAX_LOG_ITEMS) : fallback.log,
    final: {
      ...createInitialFinalState(),
      ...(candidate.final || {})
    },
    settings: {
      ...DEFAULT_SETTINGS,
      ...(candidate.settings || {})
    }
  };
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

// Универсальное сохранение + перерисовка после изменения состояния.
function commit() {
  saveState();
  render();
}

// Главная отрисовка интерфейса.
function render() {
  renderScreens();
  renderMenu();
  renderSetup();
  renderSettings();
  renderGameHeader();
  renderTeams();
  renderSummary();
  renderBoard();
  renderLog();
  renderCluePanel();
  renderFinalPanel();
}

function renderScreens() {
  menuScreen.classList.toggle('hidden', state.screen !== 'menu');
  setupScreen.classList.toggle('hidden', state.screen !== 'setup');
  gameScreen.classList.toggle('hidden', state.screen !== 'game');
}

// Главное меню: вход в игру, настройки и продолжение сохраненной партии.
function renderMenu() {
  menuMeta.textContent = hasGameProgress()
    ? 'Есть сохранённая партия. Можно продолжить её или начать новую через экран подготовки.'
    : 'Три команды, два раунда, спецвопросы, финал и запуск без интернета.';
  continueGameBtn.classList.toggle('hidden', !hasGameProgress());
}

// Экран подготовки: здесь вводятся имена команд и показываются правила перед стартом.
function renderSetup() {
  setupTeamInputs.forEach((input, index) => {
    if (document.activeElement !== input) {
      input.value = state.teams[index].name;
    }
  });

  setupNote.textContent = hasGameProgress()
    ? 'Если начать игру сейчас, текущий прогресс будет сброшен.'
    : 'Сначала задай названия команд, потом запускай игру.';
  startGameBtn.textContent = hasGameProgress() ? 'Начать заново' : 'Начать игру';
}

function renderSettings() {
  settingsModal.classList.toggle('hidden', !uiState.settingsOpen);
  settingsSoundEnabled.checked = Boolean(state.settings.soundEnabled);
  settingsUiSounds.checked = Boolean(state.settings.uiSounds);
  settingsTypingSounds.checked = Boolean(state.settings.typingSounds);
  settingsResultSounds.checked = Boolean(state.settings.resultSounds);
  settingsVolume.value = Number(state.settings.volume);
  settingsVolumeValue.textContent = `${state.settings.volume}%`;

  const disabled = !state.settings.soundEnabled;
  settingsUiSounds.disabled = disabled;
  settingsTypingSounds.disabled = disabled;
  settingsResultSounds.disabled = disabled;
  settingsVolume.disabled = disabled;
}

// Верхняя панель игрового экрана показывает текущий этап партии.
function renderGameHeader() {
  if (state.screen !== 'game') {
    phaseLabel.textContent = '';
    return;
  }

  const phaseMap = {
    board: GAME_DATA.rounds[state.currentRoundIndex]?.title || 'Игра',
    clue: 'Открыт вопрос',
    'final-selection': 'Финал: выбор темы',
    'final-wager': 'Финал: ставки',
    'final-question': 'Финальный вопрос',
    'game-over': 'Итоги игры'
  };

  phaseLabel.textContent = phaseMap[state.phase] || 'Игра';
}

// Карточки команд вынесены в горизонтальную полосу, чтобы табло занимало больше ширины.
function renderTeams() {
  if (state.screen !== 'game') {
    teamsPanel.innerHTML = '';
    return;
  }

  const ranking = getRankedTeams();
  teamsPanel.innerHTML = state.teams.map((team) => {
    const rank = ranking.findIndex((entry) => entry.id === team.id) + 1;
    const isControl = team.id === state.controlTeamId && state.phase !== 'game-over';

    return `
      <article class="team-card ${isControl ? 'is-control' : ''}">
        <div class="team-head">
          <strong class="team-name">${escapeHtml(team.name)}</strong>
          <span class="${isControl ? 'team-badge' : 'rank-badge'}">${isControl ? 'Ход' : `${rank} место`}</span>
        </div>
        <div class="team-score">${formatScore(team.score)}</div>
        <div class="team-stats">Верно: ${team.correctAnswers} | Ошибки: ${team.wrongAnswers}</div>
        <div class="team-actions">
          <div class="inline-actions">
            <button class="mini-button ${isControl ? 'is-active' : ''}" data-action="set-control-team" data-team-id="${team.id}" type="button">Передать ход</button>
          </div>
          <div class="adjust-row">
            <input id="adjust-input-${team.id}" type="number" min="0" step="100" value="100" aria-label="Изменение очков команды ${team.id + 1}">
            <button class="mini-button" data-action="apply-adjustment" data-mode="plus" data-team-id="${team.id}" type="button">+</button>
            <button class="mini-button" data-action="apply-adjustment" data-mode="minus" data-team-id="${team.id}" type="button">-</button>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

function renderSummary() {
  if (state.screen !== 'game') {
    roundSummary.innerHTML = '';
    globalControls.innerHTML = '';
    return;
  }

  const round = GAME_DATA.rounds[state.currentRoundIndex];
  const remaining = round ? countRemainingClues(state.currentRoundIndex) : 0;
  const used = round ? getUsedCount(state.currentRoundIndex) : 0;
  const controlTeam = getTeam(state.controlTeamId);

  roundSummary.innerHTML = `
    <div class="summary-stack">
      <div class="summary-card">
        <div class="summary-row">
          <span class="summary-label">Этап</span>
          <strong>${state.phase === 'board' ? round?.title || 'Финал' : getPhaseTitle()}</strong>
        </div>
        <div class="summary-row">
          <span class="summary-label">Осталось</span>
          <span class="chip">${remaining}</span>
        </div>
      </div>
      <div class="summary-card">
        <div class="summary-row">
          <span class="summary-label">Ход</span>
          <strong>${escapeHtml(controlTeam?.name || 'Не выбрано')}</strong>
        </div>
        <div class="summary-row">
          <span class="summary-label">Открыто</span>
          <span class="chip">${used}</span>
        </div>
      </div>
    </div>
  `;

  const actions = [];
  if (state.phase === 'board' && round && remaining === 0 && state.currentRoundIndex === 0) {
    actions.push('<button class="primary-button" data-action="next-round" type="button">Во 2 раунд</button>');
  }
  if (state.phase === 'board' && round && remaining === 0 && state.currentRoundIndex === 1) {
    actions.push('<button class="primary-button" data-action="start-final" type="button">К финалу</button>');
  }
  if (state.phase === 'game-over') {
    actions.push('<button class="secondary-button" data-action="export-protocol" type="button">Скачать протокол</button>');
  }

  globalControls.innerHTML = `<div class="global-controls">${actions.join('')}</div>`;
}

// Основное табло занимает максимум ширины, а вспомогательные блоки вынесены отдельно.
function renderBoard() {
  if (state.screen !== 'game') {
    boardPanel.innerHTML = '';
    return;
  }

  if (state.phase === 'game-over') {
    const ranking = getRankedTeams();
    const winner = ranking[0];
    boardPanel.innerHTML = `
      <div class="board-header">
        <div>
          <h2>Итоги игры</h2>
          <p class="compact-text">Финал завершён. Победитель уже определён.</p>
        </div>
        <span class="chip">Завершено</span>
      </div>
      <div class="winner-box">
        <div class="badge">Победитель</div>
        <h3>${escapeHtml(winner.name)}</h3>
        <p class="winner-score">${formatScore(winner.score)}</p>
      </div>
      <div class="results-list-wrapper">
        <ol class="results-list">
          ${ranking.map((team) => `<li>${escapeHtml(team.name)} — ${formatScore(team.score)}</li>`).join('')}
        </ol>
      </div>
    `;
    return;
  }

  const round = GAME_DATA.rounds[state.currentRoundIndex];
  const remaining = countRemainingClues(state.currentRoundIndex);

  boardPanel.innerHTML = `
    <div class="board-header">
      <div>
        <h2>${round.title}</h2>
        <p class="compact-text">${round.description}</p>
      </div>
      <span class="chip">Вопросов: ${remaining}</span>
    </div>
    <div class="board-grid">
      ${round.categories.map((category, categoryIndex) => `
        <div class="category-column">
          <div class="category-card">${escapeHtml(category.title)}</div>
          ${category.questions.map((question, questionIndex) => {
            const used = isClueUsed(state.currentRoundIndex, categoryIndex, questionIndex);
            const label = used ? 'Открыто' : question.value;
            return `
              <button
                class="tile-button ${used ? 'used' : ''}"
                data-action="open-clue"
                data-round-index="${state.currentRoundIndex}"
                data-category-index="${categoryIndex}"
                data-question-index="${questionIndex}"
                type="button"
                ${used || state.phase !== 'board' ? 'disabled' : ''}
              >
                ${label}
              </button>
            `;
          }).join('')}
        </div>
      `).join('')}
    </div>
  `;
}

// Модальное окно вопроса открывается поверх игрового поля, чтобы не сжимать табло.
function renderCluePanel() {
  const shouldShow = state.screen === 'game' && state.phase === 'clue' && Boolean(state.currentClue);
  clueModal.classList.toggle('hidden', !shouldShow);

  if (!shouldShow) {
    cluePanel.innerHTML = '';
    return;
  }

  const clueData = getCurrentClueData();
  if (!clueData) {
    clueModal.classList.add('hidden');
    cluePanel.innerHTML = '';
    return;
  }

  const { round, category, clue } = clueData;
  const answerBlock = state.currentClue.showAnswer ? `
    <div class="answer-box">
      <strong>Ответ</strong>
      <p class="answer-text">${escapeHtml(clue.answer)}</p>
    </div>
  ` : '';

  cluePanel.innerHTML = `
    <div class="overlay-header">
      <div>
        <h2>${escapeHtml(category.title)}</h2>
        <div class="clue-title">${round.title} | ${clue.value}</div>
      </div>
      <div class="topbar-actions">
        <span class="badge">${getClueTypeTitle(clue.type || 'standard')}</span>
        <button class="secondary-button" data-action="reveal-answer" type="button" ${state.currentClue.showAnswer ? 'disabled' : ''}>Показать ответ</button>
        <button class="danger-button" data-action="close-clue" type="button">Закрыть</button>
      </div>
    </div>
    <div class="question-box">
      <p class="question-text">${escapeHtml(clue.question)}</p>
    </div>
    ${clue.note ? `<div class="special-box"><span class="note-pill">${escapeHtml(clue.note)}</span></div>` : ''}
    ${answerBlock}
    ${renderClueControls(clue)}
  `;
}

function renderClueControls(clue) {
  const clueType = clue.type || 'standard';
  if (clueType === 'auction') {
    return renderAuctionControls(clue);
  }
  if (clueType === 'cat') {
    return renderCatControls(clue);
  }
  return renderStandardControls(clue);
}

function renderStandardControls(clue) {
  return `
    <div class="clue-actions">
      ${state.teams.map((team) => {
        const locked = state.currentClue.lockedTeamIds.includes(team.id);
        return `
          <div class="response-card">
            <strong>${escapeHtml(team.name)}</strong>
            <div class="response-buttons">
              <button class="response-button" data-action="standard-correct" data-team-id="${team.id}" type="button" ${locked ? 'disabled' : ''}>Верно (+${clue.value})</button>
              <button class="response-button" data-action="standard-wrong" data-team-id="${team.id}" type="button" ${locked ? 'disabled' : ''}>Неверно (-${clue.value})</button>
            </div>
          </div>
        `;
      }).join('')}
    </div>
    <div class="global-controls">
      <button class="secondary-button" data-action="no-answer" type="button">Никто не ответил</button>
    </div>
  `;
}

function renderAuctionControls(clue) {
  const selectedTeam = getTeam(state.currentClue.auctionTeamId ?? state.controlTeamId);
  const limits = getAuctionLimits(selectedTeam, clue.value);
  const wager = clamp(Number(state.currentClue.wager) || limits.min, limits.min, limits.max);
  state.currentClue.wager = wager;

  return `
    <div class="special-box">
      <div class="summary-row">
        <strong>Победитель аукциона</strong>
        <span class="chip">Ставка: ${wager}</span>
      </div>
      <div class="selection-grid">
        ${state.teams.map((team) => `
          <button class="final-theme ${team.id === selectedTeam.id ? 'is-active' : ''}" data-action="set-auction-team" data-team-id="${team.id}" type="button">
            ${escapeHtml(team.name)}<br>
            <span class="compact-text">Счёт: ${formatScore(team.score)}</span>
          </button>
        `).join('')}
      </div>
    </div>
    <div class="special-box">
      <div class="final-wager-row">
        <strong>Размер ставки</strong>
        <span class="chip">${limits.min} - ${limits.max}</span>
      </div>
      <input id="auctionWagerInput" type="number" min="${limits.min}" max="${limits.max}" step="100" value="${wager}">
    </div>
    <div class="special-actions">
      <button class="primary-button" data-action="auction-correct" type="button">Ответ верный</button>
      <button class="danger-button" data-action="auction-wrong" type="button">Ответ неверный</button>
    </div>
  `;
}

function renderCatControls(clue) {
  const chooser = getTeam(state.controlTeamId);
  const recipientId = state.currentClue.recipientTeamId;
  const catCost = state.currentClue.catCost || clue.value;

  return `
    <div class="special-box">
      <div class="summary-row">
        <strong>Кому передать</strong>
        <span class="chip">${escapeHtml(chooser.name)}</span>
      </div>
      <div class="selection-grid">
        ${state.teams.map((team) => {
          const disabled = team.id === chooser.id;
          return `
            <button class="final-theme ${recipientId === team.id ? 'is-active' : ''}" data-action="set-cat-recipient" data-team-id="${team.id}" type="button" ${disabled ? 'disabled' : ''}>
              ${escapeHtml(team.name)}<br>
              <span class="compact-text">Счёт: ${formatScore(team.score)}</span>
            </button>
          `;
        }).join('')}
      </div>
    </div>
    <div class="special-box">
      <strong>Стоимость вопроса</strong>
      <div class="inline-actions" style="margin-top: 12px;">
        ${GAME_DATA.rounds[state.currentRoundIndex].values.map((value) => `
          <button class="value-button ${catCost === value ? 'is-active' : ''}" data-action="set-cat-cost" data-value="${value}" type="button">${value}</button>
        `).join('')}
      </div>
      <div style="margin-top: 12px;">
        <input id="catCostInput" type="number" min="${GAME_DATA.rounds[state.currentRoundIndex].values[0]}" step="100" value="${catCost}">
      </div>
    </div>
    <div class="special-actions">
      <button class="primary-button" data-action="cat-correct" type="button" ${recipientId === null || recipientId === undefined ? 'disabled' : ''}>Соперник ответил верно</button>
      <button class="danger-button" data-action="cat-wrong" type="button" ${recipientId === null || recipientId === undefined ? 'disabled' : ''}>Соперник ответил неверно</button>
    </div>
  `;
}

// Финальные этапы также вынесены в модальное окно, чтобы основной экран оставался чистым.
function renderFinalPanel() {
  const finalPhases = ['final-selection', 'final-wager', 'final-question'];
  const shouldShow = state.screen === 'game' && finalPhases.includes(state.phase);
  finalModal.classList.toggle('hidden', !shouldShow);

  if (!shouldShow) {
    finalPanel.innerHTML = '';
    return;
  }

  if (state.phase === 'final-selection') {
    renderFinalSelection();
    return;
  }

  if (state.phase === 'final-wager') {
    renderFinalWagers();
    return;
  }

  renderFinalQuestion();
}

function renderFinalSelection() {
  const remainingThemes = GAME_DATA.finalThemes.filter((theme) => !state.final.removedThemeIds.includes(theme.id));
  const currentSelectorId = state.final.turnQueue[state.final.turnIndex % state.final.turnQueue.length];
  const currentSelector = getTeam(currentSelectorId);

  finalPanel.innerHTML = `
    <div class="overlay-header">
      <div>
        <h2>Финал: выбор темы</h2>
        <p class="compact-text">Команды по очереди убирают темы, пока не останется одна.</p>
      </div>
      <span class="chip">Ход: ${escapeHtml(currentSelector?.name || 'Команда')}</span>
    </div>
    <div class="final-box">
      <p class="question-text">Осталось тем: ${remainingThemes.length}</p>
    </div>
    <div class="selection-grid">
      ${GAME_DATA.finalThemes.map((theme) => {
        const removed = state.final.removedThemeIds.includes(theme.id);
        return `
          <button class="final-theme ${removed ? 'removed' : ''}" data-action="remove-theme" data-theme-id="${theme.id}" type="button" ${removed ? 'disabled' : ''}>
            ${escapeHtml(theme.title)}
          </button>
        `;
      }).join('')}
    </div>
  `;
}

function renderFinalWagers() {
  const theme = getSelectedFinalTheme();

  finalPanel.innerHTML = `
    <div class="overlay-header">
      <div>
        <h2>Финал: ставки</h2>
        <p class="compact-text">Тема уже выбрана, теперь команды делают ставки.</p>
      </div>
      <span class="chip">Тема: ${escapeHtml(theme.title)}</span>
    </div>
    <div class="final-grid">
      ${state.final.activeTeamIds.map((teamId) => {
        const team = getTeam(teamId);
        const wager = Number(state.final.wagers[teamId] || 0);
        return `
          <div class="response-card">
            <strong>${escapeHtml(team.name)}</strong>
            <p class="compact-text">Счёт: ${formatScore(team.score)}</p>
            <input type="number" data-final-wager="${team.id}" min="0" max="${Math.max(team.score, 0)}" step="100" value="${wager}">
          </div>
        `;
      }).join('')}
    </div>
    <div class="global-controls">
      <button class="primary-button" data-action="confirm-wagers" type="button">Перейти к вопросу</button>
    </div>
  `;
}

function renderFinalQuestion() {
  const theme = getSelectedFinalTheme();
  const allResponsesReady = state.final.activeTeamIds.every((teamId) => Boolean(state.final.responses[teamId]));

  finalPanel.innerHTML = `
    <div class="overlay-header">
      <div>
        <h2>Финальный вопрос</h2>
        <p class="compact-text">${escapeHtml(theme.title)}</p>
      </div>
      <div class="topbar-actions">
        <button class="secondary-button" data-action="reveal-final-answer" type="button" ${state.final.showAnswer ? 'disabled' : ''}>Показать ответ</button>
      </div>
    </div>
    <div class="final-box">
      <p class="question-text">${escapeHtml(theme.question)}</p>
      ${state.final.showAnswer ? `<div class="answer-box"><strong>Ответ</strong><p class="answer-text">${escapeHtml(theme.answer)}</p></div>` : ''}
    </div>
    <div class="response-grid">
      ${state.final.activeTeamIds.map((teamId) => {
        const team = getTeam(teamId);
        const response = state.final.responses[teamId];
        const wager = Number(state.final.wagers[teamId] || 0);
        return `
          <div class="response-card">
            <strong>${escapeHtml(team.name)}</strong>
            <p class="compact-text">Ставка: ${formatScore(wager)}</p>
            <div class="response-buttons">
              ${renderFinalResponseButton(teamId, response, 'correct', `Верно (+${wager})`)}
              ${renderFinalResponseButton(teamId, response, 'wrong', `Неверно (-${wager})`)}
              ${renderFinalResponseButton(teamId, response, 'pass', `Нет ответа (-${wager})`)}
            </div>
          </div>
        `;
      }).join('')}
    </div>
    <div class="global-controls">
      <button class="primary-button" data-action="finish-game" type="button" ${allResponsesReady ? '' : 'disabled'}>Подвести итоги</button>
    </div>
  `;
}

function renderFinalResponseButton(teamId, currentResponse, response, label) {
  return `<button class="response-button ${currentResponse === response ? 'is-active' : ''}" data-action="set-final-response" data-team-id="${teamId}" data-response="${response}" type="button">${label}</button>`;
}

function renderLog() {
  if (state.screen !== 'game') {
    eventLog.innerHTML = '';
    return;
  }

  eventLog.innerHTML = state.log.map((entry) => `
    <div class="log-item">
      <p>${escapeHtml(entry.text)}</p>
      <div class="log-time">${escapeHtml(entry.time)}</div>
    </div>
  `).join('');
}

// Старт новой партии после экрана подготовки.
function startGameFromSetup() {
  if (hasGameProgress() && !window.confirm('Начать новую игру? Текущий прогресс будет сброшен.')) {
    return;
  }

  const names = state.teams.map((team, index) => sanitizeTeamName(team.name, DEFAULT_TEAM_NAMES[index]));
  const preservedSettings = { ...state.settings };
  state = createInitialState(names, 'game', 'Новая игра началась.');
  state.settings = preservedSettings;
  playSound('transition');
  commit();
}

// Кнопка "Новая игра" возвращает пользователя к экрану подготовки.
function resetToSetup() {
  if (!window.confirm('Перейти к новой игре? Текущая партия будет сброшена.')) {
    return;
  }

  const names = state.teams.map((team, index) => sanitizeTeamName(team.name, DEFAULT_TEAM_NAMES[index]));
  const preservedSettings = { ...state.settings };
  state = createInitialState(names, 'setup', 'Подготовка новой игры.');
  state.settings = preservedSettings;
  playSound('transition');
  commit();
}

// Открываем клетку табло и переводим интерфейс в режим вопроса.
function openClue(roundIndex, categoryIndex, questionIndex) {
  if (state.screen !== 'game' || state.phase !== 'board' || isClueUsed(roundIndex, categoryIndex, questionIndex)) {
    return;
  }

  const clue = GAME_DATA.rounds[roundIndex].categories[categoryIndex].questions[questionIndex];
  state.phase = 'clue';
  state.currentClue = {
    roundIndex,
    categoryIndex,
    questionIndex,
    lockedTeamIds: [],
    showAnswer: false,
    auctionTeamId: state.controlTeamId,
    wager: clue.value,
    recipientTeamId: null,
    catCost: clue.value
  };

  addLog(`Открыт вопрос ${clue.value} из категории «${GAME_DATA.rounds[roundIndex].categories[categoryIndex].title}».`);
  commit();
}

// Логика обычного вопроса: верный ответ даёт очки и право выбора, ошибка снимает очки.
function resolveStandardClue(teamId, isCorrect) {
  const clueData = getCurrentClueData();
  if (!clueData || state.currentClue.lockedTeamIds.includes(teamId)) {
    return;
  }

  const team = getTeam(teamId);
  const value = clueData.clue.value;

  if (isCorrect) {
    updateTeamScore(teamId, value, true);
    setControlTeam(teamId, false);
    playSound('success');
    finalizeClue(`${team.name} ответила верно и получает ${value} очков.`);
    return;
  }

  updateTeamScore(teamId, -value, false);
  state.currentClue.lockedTeamIds.push(teamId);
  addLog(`${team.name} ошиблась на вопросе за ${value}.`);
  playSound('error');

  if (state.currentClue.lockedTeamIds.length === state.teams.length) {
    finalizeClue('Все команды дали неверный ответ, вопрос закрыт.');
    return;
  }

  commit();
}

// Аукцион изменяет очки на величину ставки одной выбранной команды.
function resolveAuction(isCorrect) {
  const clueData = getCurrentClueData();
  if (!clueData) {
    return;
  }

  const teamId = state.currentClue.auctionTeamId ?? state.controlTeamId;
  const team = getTeam(teamId);
  const limits = getAuctionLimits(team, clueData.clue.value);
  const wager = clamp(Number(state.currentClue.wager) || limits.min, limits.min, limits.max);

  updateTeamScore(teamId, isCorrect ? wager : -wager, isCorrect);
  if (isCorrect) {
    setControlTeam(teamId, false);
    playSound('success');
    finalizeClue(`${team.name} выиграла аукцион и получает ${wager} очков.`);
  } else {
    playSound('error');
    finalizeClue(`${team.name} проиграла аукцион и теряет ${wager} очков.`);
  }
}

// Кот в мешке передаёт право ответа сопернику на выбранную стоимость.
function resolveCat(isCorrect) {
  const clueData = getCurrentClueData();
  const recipientId = state.currentClue?.recipientTeamId;
  if (!clueData || recipientId === null || recipientId === undefined) {
    return;
  }

  const chooser = getTeam(state.controlTeamId);
  const recipient = getTeam(recipientId);
  const value = Math.max(0, Number(state.currentClue.catCost) || clueData.clue.value);

  updateTeamScore(recipientId, isCorrect ? value : -value, isCorrect);
  if (isCorrect) {
    setControlTeam(recipientId, false);
    playSound('success');
    finalizeClue(`${chooser.name} передала «Кота в мешке» команде «${recipient.name}», и та взяла ${value}.`);
  } else {
    playSound('error');
    finalizeClue(`${chooser.name} передала «Кота в мешке» команде «${recipient.name}», и та потеряла ${value}.`);
  }
}

function finalizeClue(message) {
  if (!state.currentClue) {
    return;
  }

  const { roundIndex, categoryIndex, questionIndex } = state.currentClue;
  state.usedClues[roundIndex][categoryIndex][questionIndex] = true;
  state.currentClue = null;
  state.phase = 'board';
  addLog(message);
  commit();
}

function advanceRound() {
  if (state.currentRoundIndex !== 0 || countRemainingClues(0) !== 0) {
    return;
  }

  state.currentRoundIndex = 1;
  addLog('Первый раунд завершён. Игра переходит во второй раунд.');
  playSound('transition');
  commit();
}

// После второго раунда к финалу допускаются только команды с положительным счетом.
function startFinal() {
  if (state.currentRoundIndex !== 1 || countRemainingClues(1) !== 0) {
    return;
  }

  const eligible = getEligibleFinalTeams();
  state.final = createInitialFinalState();
  state.final.activeTeamIds = eligible;
  state.final.turnQueue = [...eligible].sort((a, b) => getTeam(a).score - getTeam(b).score);
  state.phase = 'final-selection';
  addLog('Второй раунд завершён. Начинается финал.');
  playSound('transition');
  commit();
}

function removeFinalTheme(themeId) {
  if (state.phase !== 'final-selection' || state.final.removedThemeIds.includes(themeId)) {
    return;
  }

  const selectorId = state.final.turnQueue[state.final.turnIndex % state.final.turnQueue.length];
  const selector = getTeam(selectorId);
  const theme = GAME_DATA.finalThemes.find((item) => item.id === themeId);
  state.final.removedThemeIds.push(themeId);
  state.final.turnIndex += 1;
  addLog(`${selector.name} убирает тему «${theme.title}».`);

  const remainingThemes = GAME_DATA.finalThemes.filter((item) => !state.final.removedThemeIds.includes(item.id));
  if (remainingThemes.length === 1) {
    state.final.selectedThemeId = remainingThemes[0].id;
    state.phase = 'final-wager';
    state.final.activeTeamIds.forEach((teamId) => {
      state.final.wagers[teamId] = 0;
    });
    addLog(`Финальная тема определена: «${remainingThemes[0].title}».`);
    playSound('transition');
  }

  commit();
}

function confirmFinalWagers() {
  const valid = state.final.activeTeamIds.every((teamId) => {
    const team = getTeam(teamId);
    const wager = Number(state.final.wagers[teamId] || 0);
    return wager >= 0 && wager <= Math.max(team.score, 0);
  });

  if (!valid) {
    window.alert('Проверь ставки: они не должны превышать текущий счёт команды.');
    playSound('error');
    return;
  }

  state.phase = 'final-question';
  state.final.showAnswer = false;
  addLog('Ставки в финале приняты. Открыт финальный вопрос.');
  playSound('transition');
  commit();
}

function setFinalResponse(teamId, response) {
  state.final.responses[teamId] = response;
  commit();
}

// В финале ставки прибавляются или вычитаются после отметки результата каждой команды.
function finishGame() {
  if (!state.final.activeTeamIds.length) {
    return;
  }

  state.final.activeTeamIds.forEach((teamId) => {
    const team = getTeam(teamId);
    const wager = Number(state.final.wagers[teamId] || 0);
    const response = state.final.responses[teamId];

    if (response === 'correct') {
      team.score += wager;
      team.correctAnswers += 1;
      addLog(`${team.name} берёт финал и получает ${wager} очков.`);
    } else {
      team.score -= wager;
      team.wrongAnswers += 1;
      addLog(`${team.name} не берёт финал и теряет ${wager} очков.`);
    }
  });

  state.phase = 'game-over';
  const winner = getRankedTeams()[0];
  addLog(`Игра завершена. Побеждает команда «${winner.name}» со счётом ${winner.score}.`);
  playSound('success');
  commit();
}

// Ручная корректировка нужна для живого школьного формата, где ведущий сам управляет спорными моментами.
function applyManualAdjustment(teamId, mode) {
  const input = document.getElementById(`adjust-input-${teamId}`);
  const value = Math.max(0, Number(input?.value) || 0);
  const signed = mode === 'minus' ? -value : value;
  const team = getTeam(teamId);
  team.score += signed;
  addLog(`Ручная корректировка: ${team.name} ${signed >= 0 ? 'получает' : 'теряет'} ${Math.abs(signed)} очков.`);
  playSound(signed >= 0 ? 'success' : 'error');
  commit();
}

function setControlTeam(teamId, withLog) {
  state.controlTeamId = teamId;
  if (withLog) {
    addLog(`Право выбора переходит команде «${getTeam(teamId).name}».`);
  }
}

function updateTeamScore(teamId, delta, isCorrect) {
  const team = getTeam(teamId);
  team.score += delta;
  if (isCorrect) {
    team.correctAnswers += 1;
  } else {
    team.wrongAnswers += 1;
  }
}

// Любое заметное действие попадает в журнал партии.
function addLog(text) {
  state.log.unshift(createLogEntry(text));
  state.log = state.log.slice(0, MAX_LOG_ITEMS);
}

function createLogEntry(text) {
  return {
    text,
    time: new Date().toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' })
  };
}

function getCurrentClueData() {
  if (!state.currentClue) {
    return null;
  }
  const round = GAME_DATA.rounds[state.currentClue.roundIndex];
  const category = round.categories[state.currentClue.categoryIndex];
  const clue = category.questions[state.currentClue.questionIndex];
  return { round, category, clue };
}

function getClueTypeTitle(type) {
  if (type === 'auction') {
    return 'Аукцион';
  }
  if (type === 'cat') {
    return 'Кот в мешке';
  }
  return 'Обычный вопрос';
}

function getEligibleFinalTeams() {
  const positive = state.teams.filter((team) => team.score > 0).map((team) => team.id);
  return positive.length ? positive : [getRankedTeams()[0].id];
}

function getSelectedFinalTheme() {
  return GAME_DATA.finalThemes.find((theme) => theme.id === state.final.selectedThemeId) || GAME_DATA.finalThemes[0];
}

function getRankedTeams() {
  return [...state.teams].sort((left, right) => right.score - left.score || left.id - right.id);
}

function getPhaseTitle() {
  const titles = {
    clue: 'Открыт вопрос',
    'final-selection': 'Выбор темы финала',
    'final-wager': 'Ставки финала',
    'final-question': 'Финальный вопрос',
    'game-over': 'Итоги'
  };
  return titles[state.phase] || 'Игра';
}

function getTeam(teamId) {
  return state.teams.find((team) => team.id === teamId);
}

function getUsedCount(roundIndex) {
  return state.usedClues[roundIndex].flat().filter(Boolean).length;
}

function countRemainingClues(roundIndex) {
  return state.usedClues[roundIndex].flat().filter((value) => !value).length;
}

function isClueUsed(roundIndex, categoryIndex, questionIndex) {
  return Boolean(state.usedClues[roundIndex]?.[categoryIndex]?.[questionIndex]);
}

function getAuctionLimits(team, nominalValue) {
  const score = team?.score || 0;
  if (score > nominalValue) {
    return { min: nominalValue, max: score };
  }
  if (score > 0) {
    return { min: score, max: score };
  }
  return { min: nominalValue, max: nominalValue };
}

function getSuggestedAuctionWager(teamId) {
  const clueData = getCurrentClueData();
  if (!clueData) {
    return 0;
  }
  const team = getTeam(teamId);
  return getAuctionLimits(team, clueData.clue.value).max;
}

function hasGameProgress() {
  return state.currentRoundIndex > 0
    || state.phase !== 'board'
    || state.teams.some((team) => team.score !== 0 || team.correctAnswers !== 0 || team.wrongAnswers !== 0)
    || state.usedClues.flat(2).some(Boolean);
}

function sanitizeTeamName(value, fallback) {
  const cleaned = String(value || '').trim();
  return cleaned || fallback;
}

function formatScore(value) {
  return `${value}`;
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function shouldPlayTypingSound(event) {
  if (!state.settings.soundEnabled || !state.settings.typingSounds) {
    return false;
  }

  const active = event.target;
  const isTextInput = active instanceof HTMLElement && active.matches('input[type="text"], input[type="number"]');
  if (!isTextInput) {
    return false;
  }

  return event.key.length === 1 || ['Backspace', 'Delete', 'Spacebar'].includes(event.key);
}

// Безопасно вставляем пользовательский текст в HTML.
function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// Все звуки генерируются через Web Audio API, поэтому проект остаётся полностью автономным.
function playSound(type) {
  if (!state.settings.soundEnabled) {
    return;
  }

  const gate = {
    click: state.settings.uiSounds,
    transition: state.settings.uiSounds,
    type: state.settings.typingSounds,
    success: state.settings.resultSounds,
    error: state.settings.resultSounds
  };

  if (!gate[type]) {
    return;
  }

  const definition = getSoundDefinition(type);
  if (!definition.length) {
    return;
  }

  try {
    const context = getAudioContext();
    if (!context) {
      return;
    }

    if (context.state === 'suspended') {
      context.resume();
    }

    const masterVolume = (Number(state.settings.volume) / 100) * 0.18;
    const now = context.currentTime;

    definition.forEach((tone) => {
      const oscillator = context.createOscillator();
      const gainNode = context.createGain();
      const start = now + tone.offset;
      const peak = Math.max(0.0001, tone.gain * masterVolume);

      oscillator.type = tone.wave;
      oscillator.frequency.setValueAtTime(tone.frequency, start);
      gainNode.gain.setValueAtTime(0.0001, start);
      gainNode.gain.exponentialRampToValueAtTime(peak, start + 0.01);
      gainNode.gain.exponentialRampToValueAtTime(0.0001, start + tone.duration);

      oscillator.connect(gainNode);
      gainNode.connect(context.destination);
      oscillator.start(start);
      oscillator.stop(start + tone.duration + 0.02);
    });
  } catch (error) {
    console.error(error);
  }
}

function getAudioContext() {
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass) {
    return null;
  }

  if (!audioContext) {
    audioContext = new AudioContextClass();
  }

  return audioContext;
}

function getSoundDefinition(type) {
  const sounds = {
    click: [
      { frequency: 660, duration: 0.035, gain: 0.9, offset: 0, wave: 'triangle' },
      { frequency: 840, duration: 0.03, gain: 0.55, offset: 0.016, wave: 'triangle' }
    ],
    type: [
      { frequency: 420, duration: 0.024, gain: 0.45, offset: 0, wave: 'square' }
    ],
    success: [
      { frequency: 520, duration: 0.06, gain: 0.7, offset: 0, wave: 'triangle' },
      { frequency: 700, duration: 0.08, gain: 0.75, offset: 0.06, wave: 'triangle' },
      { frequency: 880, duration: 0.1, gain: 0.8, offset: 0.12, wave: 'triangle' }
    ],
    error: [
      { frequency: 360, duration: 0.08, gain: 0.75, offset: 0, wave: 'sawtooth' },
      { frequency: 280, duration: 0.1, gain: 0.7, offset: 0.08, wave: 'sawtooth' }
    ],
    transition: [
      { frequency: 480, duration: 0.05, gain: 0.55, offset: 0, wave: 'sine' },
      { frequency: 620, duration: 0.06, gain: 0.6, offset: 0.05, wave: 'sine' }
    ]
  };

  return sounds[type] || [];
}

// Экспортируем понятный текстовый протокол, который удобно сохранить на флешку или отправить учителю.
function exportProtocol() {
  const lines = [];
  lines.push(GAME_DATA.title);
  lines.push('Автор: Немых Никита Денисович');
  lines.push(`Дата экспорта: ${new Date().toLocaleString('ru-RU')}`);
  lines.push('');
  lines.push('Итоговая таблица:');

  getRankedTeams().forEach((team, index) => {
    lines.push(`${index + 1}. ${team.name} — ${team.score} очков | верных ответов: ${team.correctAnswers} | ошибок: ${team.wrongAnswers}`);
  });

  lines.push('');
  lines.push('Журнал игры:');
  [...state.log].reverse().forEach((entry) => {
    lines.push(`[${entry.time}] ${entry.text}`);
  });

  const blob = new Blob([lines.join('\n')], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'svoya-igra-protokol.txt';
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}
