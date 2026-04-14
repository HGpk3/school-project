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

// Ключ для сохранения прогресса игры в браузере.
const STORAGE_KEY = 'svoya-igra-russia-school-v1';
const MAX_LOG_ITEMS = 80;

// Ссылки на главные DOM-элементы интерфейса.
const phaseLabel = document.getElementById('phaseLabel');
const teamsPanel = document.getElementById('teamsPanel');
const roundSummary = document.getElementById('roundSummary');
const globalControls = document.getElementById('globalControls');
const eventLog = document.getElementById('eventLog');
const boardPanel = document.getElementById('boardPanel');
const cluePanel = document.getElementById('cluePanel');
const finalPanel = document.getElementById('finalPanel');
const exportProtocolBtn = document.getElementById('exportProtocolBtn');
const resetGameBtn = document.getElementById('resetGameBtn');

// В state хранится всё текущее состояние партии.
let state = loadState();

render();
attachGlobalEvents();

// Единая точка подключения всех кликов и изменений в интерфейсе.
function attachGlobalEvents() {
  exportProtocolBtn.addEventListener('click', exportProtocol);
  resetGameBtn.addEventListener('click', () => {
    if (!window.confirm('Начать новую игру? Текущий прогресс будет сброшен.')) {
      return;
    }
    state = createInitialState();
    saveState();
    render();
  });

  document.addEventListener('click', (event) => {
    const button = event.target.closest('[data-action]');
    if (!button) {
      return;
    }

    const action = button.dataset.action;

    if (action === 'open-clue') {
      openClue(Number(button.dataset.roundIndex), Number(button.dataset.categoryIndex), Number(button.dataset.questionIndex));
      return;
    }

    if (action === 'set-control-team') {
      setControlTeam(Number(button.dataset.teamId), true);
      return;
    }

    if (action === 'apply-adjustment') {
      applyManualAdjustment(Number(button.dataset.teamId), button.dataset.mode);
      return;
    }

    if (action === 'reveal-answer') {
      state.currentClue.showAnswer = true;
      saveState();
      render();
      return;
    }

    if (action === 'reveal-final-answer') {
      state.final.showAnswer = true;
      saveState();
      render();
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
      resolveStandardClue(Number(button.dataset.teamId), true);
      return;
    }

    if (action === 'standard-wrong') {
      resolveStandardClue(Number(button.dataset.teamId), false);
      return;
    }

    if (action === 'set-auction-team') {
      state.currentClue.auctionTeamId = Number(button.dataset.teamId);
      state.currentClue.wager = getSuggestedAuctionWager(state.currentClue.auctionTeamId);
      saveState();
      render();
      return;
    }

    if (action === 'set-cat-recipient') {
      state.currentClue.recipientTeamId = Number(button.dataset.teamId);
      saveState();
      render();
      return;
    }

    if (action === 'set-cat-cost') {
      state.currentClue.catCost = Number(button.dataset.value);
      saveState();
      render();
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
      removeFinalTheme(button.dataset.themeId);
      return;
    }

    if (action === 'confirm-wagers') {
      confirmFinalWagers();
      return;
    }

    if (action === 'set-final-response') {
      setFinalResponse(Number(button.dataset.teamId), button.dataset.response);
      return;
    }

    if (action === 'finish-game') {
      finishGame();
    }
  });

  document.addEventListener('change', (event) => {
    const target = event.target;

    if (target.matches('[data-team-name]')) {
      const teamId = Number(target.dataset.teamName);
      const team = getTeam(teamId);
      if (team) {
        team.name = target.value.trim() || `Команда ${teamId + 1}`;
        saveState();
        render();
      }
      return;
    }

    if (target.matches('#auctionWagerInput')) {
      const nextValue = Number(target.value);
      if (Number.isFinite(nextValue)) {
        state.currentClue.wager = nextValue;
        saveState();
        render();
      }
      return;
    }

    if (target.matches('#catCostInput')) {
      const nextValue = Number(target.value);
      if (Number.isFinite(nextValue)) {
        state.currentClue.catCost = nextValue;
        saveState();
        render();
      }
      return;
    }

    if (target.matches('[data-final-wager]')) {
      const teamId = Number(target.dataset.finalWager);
      state.final.wagers[teamId] = Math.max(0, Number(target.value) || 0);
      saveState();
      render();
    }
  });
}

// Начальное состояние новой партии.
function createInitialState() {
  return {
    teams: [
      createTeam(0, 'Команда 1'),
      createTeam(1, 'Команда 2'),
      createTeam(2, 'Команда 3')
    ],
    currentRoundIndex: 0,
    phase: 'board',
    controlTeamId: 0,
    usedClues: GAME_DATA.rounds.map((round) =>
      round.categories.map((category) => category.questions.map(() => false))
    ),
    currentClue: null,
    log: [createLogEntry('Игра готова.')],
    final: createInitialFinalState()
  };
}

// Отдельное стартовое состояние для финального раунда.
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

// Пытаемся восстановить прошлую партию из localStorage.
function loadState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) {
      return createInitialState();
    }
    const parsed = JSON.parse(saved);
    return normalizeState(parsed);
  } catch (error) {
    console.error(error);
    return createInitialState();
  }
}

// Нормализуем данные после загрузки, чтобы игра не падала на старом или битом состоянии.
function normalizeState(candidate) {
  const fallback = createInitialState();
  if (!candidate || typeof candidate !== 'object') {
    return fallback;
  }

  return {
    teams: Array.isArray(candidate.teams) ? candidate.teams.map((team, index) => ({
      id: index,
      name: team.name || `Команда ${index + 1}`,
      score: Number(team.score) || 0,
      correctAnswers: Number(team.correctAnswers) || 0,
      wrongAnswers: Number(team.wrongAnswers) || 0
    })) : fallback.teams,
    currentRoundIndex: Number.isInteger(candidate.currentRoundIndex) ? candidate.currentRoundIndex : 0,
    phase: candidate.phase || 'board',
    controlTeamId: Number.isInteger(candidate.controlTeamId) ? candidate.controlTeamId : 0,
    usedClues: candidate.usedClues || fallback.usedClues,
    currentClue: candidate.currentClue || null,
    log: Array.isArray(candidate.log) && candidate.log.length ? candidate.log : fallback.log,
    final: {
      ...createInitialFinalState(),
      ...(candidate.final || {})
    }
  };
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

// Полная перерисовка интерфейса после любого важного действия.
function render() {
  renderHeader();
  renderTeams();
  renderSummary();
  renderBoard();
  renderCluePanel();
  renderFinalPanel();
  renderLog();
}

// Короткий статус под заголовком игры.
function renderHeader() {
  const phaseMap = {
    board: GAME_DATA.rounds[state.currentRoundIndex]?.title || 'Игра',
    clue: 'Открыт вопрос',
    'final-selection': 'Финал: выбор темы',
    'final-wager': 'Финал: ставки',
    'final-question': 'Финал: вопрос',
    'game-over': 'Итоги'
  };
  phaseLabel.textContent = phaseMap[state.phase] || 'Игра готова.';
}

// Левая панель с командами, счетом и ручной корректировкой очков.
function renderTeams() {
  const rankings = getRankedTeams();
  teamsPanel.innerHTML = state.teams.map((team) => {
    const rank = rankings.findIndex((entry) => entry.id === team.id) + 1;
    const isControl = team.id === state.controlTeamId && state.phase !== 'game-over';
    return `
      <article class="team-card ${isControl ? 'is-control' : ''}">
        <div class="team-header">
          <strong>${escapeHtml(team.name)}</strong>
          <span class="rank-badge">${isControl ? 'Выбор' : `${rank} место`}</span>
        </div>
        <input id="team-name-${team.id}" type="text" data-team-name="${team.id}" value="${escapeHtml(team.name)}" maxlength="32" placeholder="Название команды" aria-label="Название команды ${team.id + 1}">
        <div class="score-row">
          <span class="team-meta">Счёт</span>
          <span class="score-value">${formatScore(team.score)}</span>
        </div>
        <div class="team-meta">Верных ответов: ${team.correctAnswers} | Ошибок: ${team.wrongAnswers}</div>
        <div class="inline-actions" style="margin-top: 12px;">
          <button class="mini-button ${isControl ? 'is-active' : ''}" data-action="set-control-team" data-team-id="${team.id}" type="button">Передать выбор</button>
        </div>
        <div class="adjust-box">
          <input id="adjust-input-${team.id}" type="number" step="100" min="0" value="100" aria-label="Корректировка очков команды ${team.id + 1}">
          <button class="mini-button" data-action="apply-adjustment" data-mode="plus" data-team-id="${team.id}" type="button">+ Очки</button>
          <button class="mini-button" data-action="apply-adjustment" data-mode="minus" data-team-id="${team.id}" type="button">- Очки</button>
        </div>
      </article>
    `;
  }).join('');
}

// Краткая сводка по раунду и глобальные кнопки перехода.
function renderSummary() {
  const round = GAME_DATA.rounds[state.currentRoundIndex];
  const remaining = round ? countRemainingClues(state.currentRoundIndex) : 0;
  const used = round ? getUsedCount(state.currentRoundIndex) : 0;
  const controlTeam = getTeam(state.controlTeamId);

  roundSummary.innerHTML = `
    <div class="summary-card">
      <div class="summary-row">
        <strong>${state.phase === 'board' ? round?.title || 'Финал' : getPhaseTitle()}</strong>
        <span class="chip">${remaining}</span>
      </div>
      <p class="help-text compact-text">Осталось вопросов: ${remaining}</p>
    </div>
    <div class="summary-card">
      <div class="summary-row">
        <strong>Ход</strong>
        <span class="chip">${escapeHtml(controlTeam?.name || 'Не выбрано')}</span>
      </div>
      <p class="help-text compact-text">Открыто: ${used}</p>
    </div>
  `;

  const actions = [];
  if (state.phase === 'board' && round && remaining === 0 && state.currentRoundIndex === 0) {
    actions.push('<button class="primary-button" data-action="next-round" type="button">Перейти во 2 раунд</button>');
  }
  if (state.phase === 'board' && round && remaining === 0 && state.currentRoundIndex === 1) {
    actions.push('<button class="primary-button" data-action="start-final" type="button">Перейти к финалу</button>');
  }
  if (state.phase === 'game-over') {
    actions.push('<button class="secondary-button" id="exportProtocolShortcut" type="button">Скачать протокол ещё раз</button>');
  }

  globalControls.innerHTML = `<div class="global-controls">${actions.join('')}</div>`;

  const shortcut = document.getElementById('exportProtocolShortcut');
  if (shortcut) {
    shortcut.addEventListener('click', exportProtocol);
  }
}

// Основное табло вопросов или финальный экран победителя.
function renderBoard() {
  if (state.phase === 'game-over') {
    const winner = getRankedTeams()[0];
    boardPanel.innerHTML = `
      <div class="board-header">
        <div>
          <h2>Итоги игры</h2>
        </div>
        <span class="chip">Финал завершён</span>
      </div>
      <div class="winner-box">
        <div class="badge">Победитель</div>
        <h3>${escapeHtml(winner.name)}</h3>
        <p class="winner-score">${formatScore(winner.score)}</p>
      </div>
    `;
    return;
  }

  const round = GAME_DATA.rounds[state.currentRoundIndex];
  const remaining = round ? countRemainingClues(state.currentRoundIndex) : 0;

  boardPanel.innerHTML = `
    <div class="board-header">
      <div>
        <h2>${round.title}</h2>
      </div>
      <span class="chip">Осталось: ${remaining}</span>
    </div>
    <div class="board-grid">
      ${round.categories.map((category, categoryIndex) => {
        return `
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
        `;
      }).join('')}
    </div>
  `;
}

// Панель активного вопроса. Показывается только когда открыта конкретная клетка.
function renderCluePanel() {
  if (state.phase !== 'clue' || !state.currentClue) {
    cluePanel.classList.add('hidden');
    cluePanel.innerHTML = '';
    return;
  }

  const clueData = getCurrentClueData();
  if (!clueData) {
    cluePanel.classList.add('hidden');
    cluePanel.innerHTML = '';
    return;
  }

  const { round, category, clue } = clueData;
  const clueType = clue.type || 'standard';
  const answerBlock = state.currentClue.showAnswer ? `
    <div class="answer-box">
      <strong>Ответ:</strong>
      <p class="answer-text">${escapeHtml(clue.answer)}</p>
    </div>
  ` : '';

  cluePanel.classList.remove('hidden');
  cluePanel.innerHTML = `
    <div class="overlay-header">
      <div>
        <h2>${escapeHtml(category.title)}</h2>
        <div class="clue-title">${round.title} | ${clue.value} очков</div>
      </div>
      <div class="inline-actions">
        <span class="badge">${getClueTypeTitle(clueType)}</span>
        <button class="secondary-button" data-action="reveal-answer" type="button" ${state.currentClue.showAnswer ? 'disabled' : ''}>Показать ответ</button>
        <button class="danger-button" data-action="close-clue" type="button">Закрыть вопрос</button>
      </div>
    </div>
    <div class="question-box">
      <p class="question-text">${escapeHtml(clue.question)}</p>
    </div>
    ${clue.note ? `<div class="special-box"><span class="note-pill">${escapeHtml(clue.note)}</span></div>` : ''}
    ${answerBlock}
    ${renderClueControls(clueType, clue)}
  `;
}

// В зависимости от типа вопроса подключаем нужный набор действий.
function renderClueControls(clueType, clue) {
  if (clueType === 'auction') {
    return renderAuctionControls(clue);
  }
  if (clueType === 'cat') {
    return renderCatControls(clue);
  }
  return renderStandardControls(clue);
}

// Обычный вопрос: команды могут отвечать, ошибаться или пропускать вопрос.
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

// Аукцион: ведущий выбирает победителя торгов и задает ставку.
function renderAuctionControls(clue) {
  const selectedTeam = getTeam(state.currentClue.auctionTeamId ?? state.controlTeamId);
  const limits = getAuctionLimits(selectedTeam, clue.value);
  const wager = clamp(Number(state.currentClue.wager) || limits.min, limits.min, limits.max);
  state.currentClue.wager = wager;

  return `
    <div class="special-box">
      <strong>Победитель аукциона</strong>
      <div class="selection-grid">
        ${state.teams.map((team) => `
          <button class="final-theme ${team.id === selectedTeam.id ? 'is-active' : ''}" data-action="set-auction-team" data-team-id="${team.id}" type="button">
            ${escapeHtml(team.name)}<br>
            <span class="help-text compact-text">${formatScore(team.score)}</span>
          </button>
        `).join('')}
      </div>
    </div>
    <div class="special-box">
      <div class="final-wager-row">
        <strong>Ставка команды</strong>
        <span class="chip">Допустимо: ${limits.min} - ${limits.max}</span>
      </div>
      <input id="auctionWagerInput" type="number" min="${limits.min}" max="${limits.max}" step="100" value="${wager}">
    </div>
    <div class="special-actions">
      <button class="primary-button" data-action="auction-correct" type="button">Ответ верный (+${wager})</button>
      <button class="danger-button" data-action="auction-wrong" type="button">Ответ неверный (-${wager})</button>
    </div>
  `;
}

// Кот в мешке: команда передает вопрос сопернику и назначает стоимость.
function renderCatControls(clue) {
  const currentChooser = getTeam(state.controlTeamId);
  const recipientId = state.currentClue.recipientTeamId;
  const availableValues = GAME_DATA.rounds[state.currentRoundIndex].values;
  const catCost = state.currentClue.catCost || clue.value;

  return `
    <div class="special-box">
      <div class="summary-row">
        <strong>Кому передать</strong>
        <span class="chip">${escapeHtml(currentChooser.name)}</span>
      </div>
      <div class="selection-grid">
        ${state.teams.map((team) => {
          const disabled = team.id === currentChooser.id;
          return `
            <button class="final-theme ${recipientId === team.id ? 'is-active' : ''}" data-action="set-cat-recipient" data-team-id="${team.id}" type="button" ${disabled ? 'disabled' : ''}>
              ${escapeHtml(team.name)}<br>
              <span class="help-text compact-text">${formatScore(team.score)}</span>
            </button>
          `;
        }).join('')}
      </div>
    </div>
    <div class="special-box">
      <strong>Стоимость</strong>
      <div class="inline-actions" style="margin-top: 12px;">
        ${availableValues.map((value) => `
          <button class="value-button ${catCost === value ? 'is-active' : ''}" data-action="set-cat-cost" data-value="${value}" type="button">${value}</button>
        `).join('')}
      </div>
      <div style="margin-top: 12px;">
        <input id="catCostInput" type="number" min="${availableValues[0]}" step="100" value="${catCost}">
      </div>
    </div>
    <div class="special-actions">
      <button class="primary-button" data-action="cat-correct" type="button" ${recipientId === null || recipientId === undefined ? 'disabled' : ''}>Соперник ответил верно</button>
      <button class="danger-button" data-action="cat-wrong" type="button" ${recipientId === null || recipientId === undefined ? 'disabled' : ''}>Соперник ответил неверно</button>
    </div>
  `;
}

// Отрисовка панели финального раунда.
function renderFinalPanel() {
  if (!['final-selection', 'final-wager', 'final-question', 'game-over'].includes(state.phase)) {
    finalPanel.classList.add('hidden');
    finalPanel.innerHTML = '';
    return;
  }

  finalPanel.classList.remove('hidden');

  if (state.phase === 'final-selection') {
    renderFinalSelection();
    return;
  }

  if (state.phase === 'final-wager') {
    renderFinalWagers();
    return;
  }

  if (state.phase === 'final-question' || state.phase === 'game-over') {
    renderFinalQuestion();
  }
}

// На этапе выбора темы команды по очереди убирают лишние темы.
function renderFinalSelection() {
  const remainingThemes = GAME_DATA.finalThemes.filter((theme) => !state.final.removedThemeIds.includes(theme.id));
  const currentSelectorId = state.final.turnQueue[state.final.turnIndex % state.final.turnQueue.length];
  const currentSelector = getTeam(currentSelectorId);

  finalPanel.innerHTML = `
    <div class="overlay-header">
      <div>
        <h2>Финал: выбор темы</h2>
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

// После выбора темы команды делают ставки в пределах своего счета.
function renderFinalWagers() {
  const theme = getSelectedFinalTheme();
  finalPanel.innerHTML = `
    <div class="overlay-header">
      <div>
        <h2>Финал: ставки</h2>
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
            <p class="help-text compact-text">${formatScore(team.score)}</p>
            <input type="number" data-final-wager="${team.id}" min="0" max="${Math.max(team.score, 0)}" step="100" value="${wager}">
          </div>
        `;
      }).join('')}
    </div>
    <div class="global-controls">
      <button class="primary-button" data-action="confirm-wagers" type="button">Перейти к финальному вопросу</button>
    </div>
  `;
}

// Финальный вопрос: ведущий отмечает ответы и завершает игру.
function renderFinalQuestion() {
  const theme = getSelectedFinalTheme();
  const allResponsesReady = state.final.activeTeamIds.every((teamId) => Boolean(state.final.responses[teamId]));
  finalPanel.innerHTML = `
    <div class="overlay-header">
      <div>
        <h2>Финальный вопрос</h2>
        <p class="help-text compact-text">${escapeHtml(theme.title)}</p>
      </div>
      <div class="inline-actions">
        <button class="secondary-button" data-action="reveal-final-answer" type="button" id="revealFinalAnswerBtn" ${state.final.showAnswer ? 'disabled' : ''}>Показать ответ</button>
      </div>
    </div>
    <div class="final-box">
      <p class="question-text">${escapeHtml(theme.question)}</p>
      ${state.final.showAnswer ? `<div class="answer-box"><strong>Ответ:</strong><p class="answer-text">${escapeHtml(theme.answer)}</p></div>` : ''}
    </div>
    <div class="response-grid">
      ${state.final.activeTeamIds.map((teamId) => {
        const team = getTeam(teamId);
        const response = state.final.responses[teamId];
        const wager = Number(state.final.wagers[teamId] || 0);
        return `
          <div class="response-card">
            <strong>${escapeHtml(team.name)}</strong>
            <p class="help-text compact-text">Ставка: ${formatScore(wager)}</p>
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

// Журнал последних действий для ведущего.
function renderLog() {
  eventLog.innerHTML = state.log.map((entry) => `
    <div class="log-item">
      <p>${escapeHtml(entry.text)}</p>
      <div class="log-time">${escapeHtml(entry.time)}</div>
    </div>
  `).join('');
}

// Открываем выбранную клетку табло и запоминаем, какой вопрос сейчас активен.
function openClue(roundIndex, categoryIndex, questionIndex) {
  if (state.phase !== 'board' || isClueUsed(roundIndex, categoryIndex, questionIndex)) {
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
}

// Логика обычного вопроса: правильный ответ дает очки и право выбора, ошибка отнимает очки.
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
    finalizeClue(`${team.name} ответила верно и получает ${value} очков.`);
    return;
  }

  updateTeamScore(teamId, -value, false);
  state.currentClue.lockedTeamIds.push(teamId);
  addLog(`${team.name} ошиблась на вопросе за ${value}.`);

  if (state.currentClue.lockedTeamIds.length === state.teams.length) {
    finalizeClue('Все команды дали неверный ответ, вопрос закрыт.');
    return;
  }

  saveState();
  render();
}

// Логика аукциона: очки меняются на величину ставки.
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
    finalizeClue(`${team.name} выиграла аукцион и ответила верно. Начислено ${wager} очков.`);
  } else {
    finalizeClue(`${team.name} проиграла аукцион и теряет ${wager} очков.`);
  }
}

// Логика кота в мешке: очки получает или теряет выбранный соперник.
function resolveCat(isCorrect) {
  const clueData = getCurrentClueData();
  const recipientId = state.currentClue.recipientTeamId;
  if (!clueData || recipientId === null || recipientId === undefined) {
    return;
  }

  const recipient = getTeam(recipientId);
  const chooser = getTeam(state.controlTeamId);
  const value = Math.max(0, Number(state.currentClue.catCost) || clueData.clue.value);

  updateTeamScore(recipientId, isCorrect ? value : -value, isCorrect);
  if (isCorrect) {
    setControlTeam(recipientId, false);
    finalizeClue(`${chooser.name} передала «Кота в мешке» команде «${recipient.name}», и та ответила верно на ${value} очков.`);
  } else {
    finalizeClue(`${chooser.name} передала «Кота в мешке» команде «${recipient.name}», и та потеряла ${value} очков.`);
  }
}

// Закрываем текущий вопрос и возвращаемся к табло.
function finalizeClue(message) {
  if (!state.currentClue) {
    return;
  }

  const { roundIndex, categoryIndex, questionIndex } = state.currentClue;
  state.usedClues[roundIndex][categoryIndex][questionIndex] = true;
  state.currentClue = null;
  state.phase = 'board';
  addLog(message);
}

// Переход от первого раунда ко второму.
function advanceRound() {
  if (state.currentRoundIndex !== 0 || countRemainingClues(0) !== 0) {
    return;
  }
  state.currentRoundIndex = 1;
  addLog('Первый раунд завершён. Игра переходит во второй раунд.');
}

// Запуск финального раунда после окончания второго тура.
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
}

// Удаляем одну тему финала. Когда остается одна, начинаются ставки.
function removeFinalTheme(themeId) {
  if (state.phase !== 'final-selection' || state.final.removedThemeIds.includes(themeId)) {
    return;
  }

  const selectorId = state.final.turnQueue[state.final.turnIndex % state.final.turnQueue.length];
  const selector = getTeam(selectorId);
  const theme = GAME_DATA.finalThemes.find((item) => item.id === themeId);
  state.final.removedThemeIds.push(themeId);
  state.final.turnIndex += 1;
  addLog(`${selector.name} убирает тему «${theme.title}» из финала.`);

  const remainingThemes = GAME_DATA.finalThemes.filter((item) => !state.final.removedThemeIds.includes(item.id));
  if (remainingThemes.length === 1) {
    state.final.selectedThemeId = remainingThemes[0].id;
    state.phase = 'final-wager';
    state.final.activeTeamIds.forEach((teamId) => {
      state.final.wagers[teamId] = 0;
    });
    addLog(`Финальная тема определена: «${remainingThemes[0].title}».`);
  }

  saveState();
  render();
}

// Проверяем корректность ставок и открываем финальный вопрос.
function confirmFinalWagers() {
  const allValid = state.final.activeTeamIds.every((teamId) => {
    const team = getTeam(teamId);
    const wager = Number(state.final.wagers[teamId] || 0);
    return wager >= 0 && wager <= Math.max(team.score, 0);
  });

  if (!allValid) {
    window.alert('Проверьте ставки: они не должны превышать текущий счёт команды.');
    return;
  }

  state.phase = 'final-question';
  state.final.showAnswer = false;
  addLog('Ставки в финале приняты. Открыт финальный вопрос.');
}

function setFinalResponse(teamId, response) {
  state.final.responses[teamId] = response;
  saveState();
  render();
}

// Подсчет финала и определение победителя игры.
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
      addLog(`${team.name} отвечает верно в финале и получает ${wager} очков.`);
    } else {
      team.score -= wager;
      team.wrongAnswers += 1;
      addLog(`${team.name} не берёт финал и теряет ${wager} очков.`);
    }
  });

  state.phase = 'game-over';
  const winner = getRankedTeams()[0];
  addLog(`Игра завершена. Побеждает команда «${winner.name}» со счётом ${winner.score}.`);
}

// Ручная корректировка очков на случай спорных моментов во время школьной игры.
function applyManualAdjustment(teamId, mode) {
  const input = document.getElementById(`adjust-input-${teamId}`);
  const value = Math.max(0, Number(input?.value) || 0);
  const signed = mode === 'minus' ? -value : value;
  const team = getTeam(teamId);
  team.score += signed;
  addLog(`Ручная корректировка счёта: ${team.name} ${signed >= 0 ? 'получает' : 'теряет'} ${Math.abs(signed)} очков.`);
}

// Назначение команды, которая выбирает следующую клетку.
function setControlTeam(teamId, withLog) {
  state.controlTeamId = teamId;
  if (withLog) {
    addLog(`Право выбора вопроса передано команде «${getTeam(teamId).name}».`);
  }
  saveState();
  render();
}

// Универсальное изменение счета и статистики ответов команды.
function updateTeamScore(teamId, delta, isCorrect) {
  const team = getTeam(teamId);
  team.score += delta;
  if (isCorrect) {
    team.correctAnswers += 1;
  } else {
    team.wrongAnswers += 1;
  }
}

// Любое важное действие попадает в журнал и сразу сохраняется.
function addLog(text) {
  state.log.unshift(createLogEntry(text));
  state.log = state.log.slice(0, MAX_LOG_ITEMS);
  saveState();
  render();
}

function createLogEntry(text) {
  return {
    text,
    time: new Date().toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' })
  };
}

// Берем данные активного вопроса из общей структуры GAME_DATA.
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

// До финала допускаются команды с положительным счетом.
function getEligibleFinalTeams() {
  const positive = state.teams.filter((team) => team.score > 0).map((team) => team.id);
  if (positive.length) {
    return positive;
  }
  return [getRankedTeams()[0].id];
}

function getSelectedFinalTheme() {
  return GAME_DATA.finalThemes.find((theme) => theme.id === state.final.selectedThemeId) || GAME_DATA.finalThemes[0];
}

// Сортировка команд по счету для вывода мест и победителя.
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
  return Boolean(state.usedClues[roundIndex][categoryIndex][questionIndex]);
}

// Правила аукциона: ставка не может быть ниже номинала, а при низком банке — выше счета команды.
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
  const limits = getAuctionLimits(team, clueData.clue.value);
  return limits.max;
}

function formatScore(value) {
  return `${value}`;
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

// Экранируем пользовательский текст, чтобы безопасно вставлять его в HTML.
function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// Экспорт всей партии в простой текстовый протокол, который удобно сохранить или распечатать.
function exportProtocol() {
  const lines = [];
  lines.push(GAME_DATA.title);
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
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = 'svoya-igra-protokol.txt';
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  URL.revokeObjectURL(url);
}
