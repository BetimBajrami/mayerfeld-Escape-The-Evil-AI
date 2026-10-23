[Escape room - README.md](https://github.com/user-attachments/files/33888826/Escape.room.-.README.md)


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

**Controls and accessibility notes**

- The game uses native browser `alert()`, `prompt()`, and `confirm()` dialogs instead of buttons or a visual interface.
- Enter the number shown for your chosen action; invalid menu choices are rejected and can be retried.
- **Cancel** in a room or puzzle prompt ends the current adventure safely.
- Branko's notes and essential game feedback are intended to be shown in dialogs; additional messages may appear in the browser's Developer Tools **Console** (`F12`).
- After a completed attempt, the replay flow is designed to clear inventory, puzzles, and room progress before starting again.

> **Project status (23 October 2026):** World navigation, puzzles, game state, and the controller are merged. The Person A interaction functions are still awaiting integration on `main`. Although `index.html` is present, the current `script.js` calls `startAdventure()` before that function has been defined. The complete game will be playable after the interaction code is merged and tested. This note should be updated at release.

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

## 👩‍💻 The team

| Developer | Responsibility | Key contributions |
| --- | --- | --- |
| **[Betim](https://github.com/BetimBajrami)** — Person A | Interaction systems | Player prompts, input validation, story presentation, note display, cancellation, and replay integration |
| **[Aspa](https://github.com/ScubaMonster)** — Person B | Story & world navigation | Sequel storyline, three room descriptions, choice mappings, backtracking routes, and Branko's clues |
| **[Tahlia](https://github.com/TahliaJK)** — Person C | Game state & decision logic | Inventory and progress tracking, three puzzles, navigation controller, endings, and reset logic |

The project was developed collaboratively during the **Mayerfeld Consulting AI-Assisted Frontend Developer Practicum**.

## 🗂️ Project structure

```text
mayerfeld-Escape-The-Evil-AI/
├── index.html       # Minimal HTML entry point
├── script.js        # Story, navigation, interaction, puzzles, and state
└── README.md        # Project documentation
```

### How the parts connect

```text
Person A: get the player's choice
              ↓
Person B: translate the choice into an action
              ↓
Person C: update the game / move rooms / solve puzzles
              ↓
Person A: communicate the result to the player
```

**Example shared interfaces:** `getRoomDescription(room)`, `getRoomAction(room, choice)`, `getRoomNote(room)`, `askRoomAction(room)`, `escapeRoom()`, and `resetGameState()`.

## 🚀 Run locally

Clone the repository:

```bash
git clone https://github.com/BetimBajrami/mayerfeld-Escape-The-Evil-AI.git
cd mayerfeld-Escape-The-Evil-AI
```

Open **`index.html`** in a browser. No build tools or package installation are needed.

**Important:** Until Person A's interaction functions are merged into `main`, the startup call will produce an error rather than launch the complete adventure. See the project-status note above.

## 🤝 Collaboration workflow

Each developer worked in a dedicated Git branch, implemented their assigned functionality, and submitted pull requests for team review. Changes were merged into `main` after coordination and feedback.

The separation between story/navigation, interaction, and game logic allowed the team to build independently while keeping their parts compatible.

## 📚 Course context

**Mayerfeld Consulting — AI-Assisted Frontend Developer Practicum**  
**October 2026 | Bonus JavaScript assignment**

This is an educational team project made to practise JavaScript fundamentals, collaborative workflows, and creative problem-solving. It is not affiliated with the creators or rights holders of *Saw* or the Jigsaw character.

---

*The Evil AI has one last message:*

> **EVIL AI:** THIS WAS NOT IN MY TRAINING DATA!
>
> **JIGSAW:** Perhaps you should have read the README.
