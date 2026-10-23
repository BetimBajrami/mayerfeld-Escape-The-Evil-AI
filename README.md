[Escape room - README.md](https://github.com/user-attachments/files/33889397/Escape.room.-.README.md)
# Escape the Evil AI: REVENGE.js 🤖🔐

### Three developers. Three rooms. One very angry AI.

*A JavaScript-only browser escape-room adventure created as a bonus project for the Mayerfeld Consulting AI-Assisted Frontend Developer Practicum (October 2026).*

> **EVIL AI:** YOU THINK THREE WINS CAN DEFEAT ME?!
> **JIGSAW:** Hello again. I want to play another game.

---

## 🎬 Previously, on Rock, Paper, Scissors…

Three junior developers defeated an Evil AI and rescued their mentor, Branko. Their assignment was saved. Their troubles were over.

Or so they thought.

The Evil AI activates its **REVENGE protocol**, trapping the developers inside its operating system. A familiar squeaking tricycle approaches from the darkness. Jigsaw has returned, apparently without consulting anyone.

This time, winning a game isn't enough. To escape, you'll need to explore rooms, follow clues, remember what you've learned, and put your JavaScript knowledge to work.

**A sequel to:** [Rock, Paper, Scissors — Escape the Evil AI](https://github.com/ScubaMonster/mayerfeld-rock-paper-scissors)

## 🎮 How to play

1. Open `index.html` in a modern desktop browser.
2. Read the story and on-screen mission instructions.
3. Select **1, 2, 3, or 4** in each browser prompt to explore, inspect objects, read notes, or move between rooms.
4. Solve the JavaScript puzzles to unlock the equipment needed for your escape.
5. Return to earlier rooms whenever you need to revisit a clue or finish a challenge.
6. Choose carefully: not every promised exit can be trusted.

### Controls and accessibility notes

- The game uses native browser `alert()`, `prompt()`, and `confirm()` dialogs instead of buttons or a visual interface.
- Enter the number shown for your chosen action; invalid menu choices are rejected and can be retried.
- **Cancel** in a room or puzzle prompt ends the current adventure safely.
- Branko's notes and essential game feedback are intended to be shown in dialogs; additional messages may appear in the browser's Developer Tools **Console** (`F12`).
- After a completed attempt, the replay flow is designed to clear inventory, puzzles, and room progress before starting again.

> **Project status (23 October 2026):** Person B's story, navigation, and interaction functions and Person C's game-state and decision logic are being integrated and tested together. Update this note once the complete game has been tested successfully on `main`.

## 🚪 The three rooms

| Room | What awaits you | JavaScript theme |
| --- | --- | --- |
| **1. The Chamber of Unstable Variables** | A locked security terminal, a handwritten note, and a suspiciously generous exit offer. | Variable declarations |
| **2. The Corridor of Questionable Equality** | A security monitor, a firewall, and a way back to the beginning. | Equality and type comparison |
| **3. The Function of No Return** | The AI's central processor and the final exit terminal. | Functions and return values |

The rooms are connected, and **backtracking is part of the game**. Solved puzzles and collected items remain in your game state as you move between rooms.

### Your mission

Find the recovery card, disable the firewall, and unlock the final exit without falling for the Evil AI's traps.

*We won't spoil the puzzle answers here. Branko left notes for a reason.*

## 🛠️ Built with

- **JavaScript (ES6+)** — story data, choices, navigation, state, puzzles, and game logic
- **HTML5** — a minimal entry page that loads `script.js`
- **Native browser dialogs** — `alert()`, `prompt()`, and `confirm()` for interaction
- **Browser DevTools** — additional narrative messages and debugging
- **Git & GitHub** — feature branches, pull requests, peer reviews, and merges

**Assignment constraint:** JavaScript-driven gameplay only. No DOM manipulation, CSS-based UI, or external libraries are required.

## 🧠 What we practised

- Writing reusable functions with clear responsibilities
- Working with objects and mapping user selections to actions
- Validating and normalizing player input
- Using conditionals and loops to control game flow
- Tracking inventory, puzzle completion, and previous decisions with Boolean state
- Unlocking later actions based on earlier choices
- Handling cancellation without crashing
- Resetting all game state for a new attempt
- Integrating independently developed features using shared function contracts
- Collaborating through Git branches, GitHub, and code integration

## 👩‍💻 The team

| Developer | Responsibility | Key contributions |
| --- | --- | --- |
| **[Betim Bajrami](https://github.com/BetimBajrami)** | Original Concept & Creative Support | Contributed the original Escape Room concept, provided creative input, and supported the team's development process and overall project direction. |
| **[Aspa Neraki](https://github.com/ScubaMonster)** | Story, navigation & interaction systems | Developed the storyline, room descriptions, choice mappings, navigation routes, player prompts, input validation, note display, cancellation handling, and replay functionality. |
| **[Tahlia Kisten](https://github.com/TahliaJK)** | Game state & decision logic | Implemented inventory and progress tracking, the three JavaScript puzzles, navigation controller, endings, and game-state reset logic. |

The project was developed collaboratively during the **Mayerfeld Consulting AI-Assisted Frontend Developer Practicum**. Each team member contributed to a different aspect of the project, including repository setup, story development, interaction systems, and game logic.

## 🗂️ Project structure

```text
mayerfeld-Escape-The-Evil-AI/
├── index.html       # Minimal HTML entry point
├── script.js        # Story, navigation, interaction, puzzles, and state
└── README.md        # Project documentation
```

### How the parts connect

1. **Original concept & creative support:** Helped establish the game's concept and overall creative direction.
2. **Story, navigation & interaction:** Presents the story, collects and validates player choices, and maps choices to room actions.
3. **Game state & decision logic:** Processes game actions, updates inventory and puzzle progress, manages room navigation, and determines the game's outcomes.
4. **Integration:** The interaction functions and game logic work together to deliver the complete adventure.

**Example shared interfaces:** `getRoomDescription(room)`, `getRoomAction(room, choice)`, `getRoomNote(room)`, `askRoomAction(room)`, `escapeRoom()`, and `resetGameState()`.

## 🚀 Run locally

Clone the repository:

```bash
git clone https://github.com/BetimBajrami/mayerfeld-Escape-The-Evil-AI.git
cd mayerfeld-Escape-The-Evil-AI
```

Open **`index.html`** in a browser. No build tools or package installation are needed.

**Important:** If the interaction functions and game logic have not yet been fully integrated into `main`, the game may not launch correctly. Confirm that the startup function is defined and test the complete adventure before marking the project as released.

## 🤝 Collaboration workflow

The team used GitHub to organize the project and collaborate on development. The original concept and creative direction helped shape the game, while story, navigation, interaction systems, and game-state logic were developed and brought together through the team's branch and integration workflow.

## 📚 Course context

**Mayerfeld Consulting — AI-Assisted Frontend Developer Practicum**  
**October 2026 | Bonus JavaScript assignment**

This is an educational team project made to practise JavaScript fundamentals, collaborative workflows, and creative problem-solving. It is not affiliated with the creators or rights holders of *Saw* or the Jigsaw character.

---

*The Evil AI has one last message:*

> **EVIL AI:** THIS WAS NOT IN MY TRAINING DATA!
>
> **JIGSAW:** Perhaps you should have read the README.
