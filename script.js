// Person A - interaction systems
// Handle prompts and invalid choices, Cancel without errors, final messages and
// the confirm() replay option. Ensure replay starts a completely fresh game.

// Person B — world navigation
// Design the story and create the three rooms, their descriptions, available
// choices and navigation between them. Ensure players can return to previously visited rooms.

// Person C — decision logic
// Build the game state, track collected items and previous decisions, implement a
// Puzzle dependent on past actions and determine success or failure.



"use strict";

// ========================================
// ESCAPE THE EVIL AI: REVENGE.js
// Mayerfeld Consulting - JavaScript Bonus Assignment
// ========================================

// TEAM AGREEMENT
// - Keep all gameplay in JavaScript. No DOM manipulation.
// - Work on individual feature branches and request reviews.
// - Agree on the function contracts below before integration.
// - This version implements ONLY Person B's responsibilities.


// ========================================
// PERSON A - INTERACTION SYSTEMS (BETIM)
// ========================================

// TODO: Create the functions that communicate with the player.
// Suggested interface:
// askRoomAction(room)
//   1. Show getRoomDescription(room) in prompt().
//   2. Check for Cancel FIRST; return "quit".
//   3. Trim the user's choice and call getRoomAction(room, choice).
//   4. If that returns null, explain the valid options and ask again.
//   5. Otherwise return the action string to Person C.
//
// TODO: Display messages and notes using alert()/console.
// TODO: Handle confirm() replay and safe cancellation.
// IMPORTANT: Person B's functions RETURN TEXT. They do not open prompts.


// ========================================
// PERSON B - STORY & WORLD NAVIGATION (ASPA)
// ========================================

// Jigsaw and the Evil AI have very different opinions
// about what constitutes an appropriate teaching method.

function getOpeningStory() {
    return `REVENGE.js

Previously, on ROCK, PAPER, SCISSORS...

Three junior developers defeated the Evil AI,
rescued Branko, and saved their assignment.

Or so they thought.

EVIL AI: YOU THINK THREE WINS CAN DEFEAT ME?!

SYSTEM: INITIATING REVENGE PROTOCOL...

The developers awaken inside the AI's operating system.

Somewhere in the darkness...

Squeak. Squeak. Squeak.

JIGSAW: Hello again. I want to play another game.

EVIL AI: WHY ARE YOU STILL HERE?!`;
}

// Navigation contract:
// The keys "1" through "4" identify choices displayed to the player.
// The values are action codes for Person C's controller to interpret.
// Person B does NOT move the player or change inventory here.
//
// Directions:
// bootChamber -> corridor
// corridor -> bootChamber or core
// core -> corridor
//
// The "trap" choice is a potential bad ending, decided by Person C.
// "terminal" starts that room's puzzle, also owned by Person C.
// "note" displays the associated text, handled by Person A.

const rooms = {
    bootChamber: {
        title: "ROOM 1 - THE CHAMBER OF UNSTABLE VARIABLES",
        description: `You wake up inside a digital prison cell.
A security terminal flickers beside a keyboard.
A handwritten note lies beneath it.

A cheerful sign advertises:
"FREE EXIT! TOTALLY NOT A TRAP!"`,
        options: `1 - Investigate the security terminal
2 - Examine the handwritten note
3 - Enter the Firewall Corridor
4 - Accept the Evil AI's free-exit offer`,
        actions: {
            "1": "terminal",
            "2": "note",
            "3": "corridor",
            "4": "trap"
        },
        note: `BRANKO'S NOTES - FRAGMENT #001

Three keywords. Three possibilities.

VAR belongs to the old world.
LET allows a variable to change.
But some values must remain CONSTANT.

P.S. If you're reading this, please save me.
I haven't finished grading your assignments.`
    },

    corridor: {
        title: "ROOM 2 - THE CORRIDOR OF QUESTIONABLE EQUALITY",
        description: `Red warning lights illuminate the hallway.
A security monitor displays:

0 == false

A crumpled note rests beside the monitor.
The AI Core is visible at the far end.`,
        options: `1 - Investigate the security monitor
2 - Read the crumpled note
3 - Return to the Boot Chamber
4 - Approach the AI Core`,
        actions: {
            "1": "monitor",
            "2": "note",
            "3": "bootChamber",
            "4": "core"
        },
        note: `BRANKO'S NOTES - FRAGMENT #002

Not everything that appears equal
is truly identical.

One equality operator may convert values.
Another compares without changing their types.

Sometimes being STRICT is a good thing.

P.S. Please stop letting Jigsaw
near my teaching materials.`
    },

    core: {
        title: "ROOM 3 - THE FUNCTION OF NO RETURN",
        description: `You face the Evil AI's glowing central processor.
An exit terminal demands a recovery card
and confirmation that the firewall is offline.

EVIL AI: THERE IS NO WAY OUT!
JIGSAW: Every function has an ending.`,
        options: `1 - Investigate the final exit terminal
2 - Read Branko's final note
3 - Return to the Firewall Corridor
4 - Trust the Evil AI's emergency escape`,
        actions: {
            "1": "terminal",
            "2": "note",
            "3": "corridor",
            "4": "trap"
        },
        note: `BRANKO'S NOTES - FRAGMENT #003

A function can do many things.
But how does it send a value
back to the code that called it?

Think about what a function RETURNS.

P.S. I really hope this is my last note.`
    }
};

// Person A calls this to show the room and its available choices.
function getRoomDescription(room) {
    const currentRoom = rooms[room];

    if (currentRoom === undefined) {
        return null;
    }

    return `${currentRoom.title}

${currentRoom.description}

WHAT WILL YOU DO?

${currentRoom.options}

Choose 1, 2, 3, or 4.
Press Cancel to quit.`;
}

// Person A passes the player's already-trimmed input.
// null means invalid choice, NOT cancellation.
// Only Person A can identify a cancelled prompt.
function getRoomAction(room, choice) {
    const currentRoom = rooms[room];

    if (currentRoom === undefined) {
        return null;
    }

    return currentRoom.actions[choice] || null;
}

// Person A can display this text when the player chooses "note".
function getRoomNote(room) {
    const currentRoom = rooms[room];

    if (currentRoom === undefined) {
        return null;
    }

    return currentRoom.note;
}


// ========================================
// PERSON C - GAME STATE & DECISION LOGIC (TAHLIA)
// ========================================

let currentRoom = "bootChamber";

let hasRecoveryCard = false;
let firewallOffline = false;

let solvedConstPuzzle = false;
let solvedEqualityPuzzle = false;
let solvedReturnPuzzle = false;

let gameOver = false;


// ========================================
// ROOM 1 - CONST PUZZLE
// ========================================

function solveConstPuzzle() {
    if (solvedConstPuzzle) {
        alert("You have already solved this puzzle.");
        return;
    }

    const answer = prompt(
        "EVIL AI: Which keyword declares a variable " +
        "that cannot be reassigned?\n" +
        "Type const, let, or var."
    );

    if (answer === null) {
        return "quit";
    }

    if (answer.trim().toLowerCase() === "const") {
        solvedConstPuzzle = true;
        hasRecoveryCard = true;

        alert(
            "Correct! You obtained the recovery card."
        );
    } else {
        alert(
            "Incorrect! The recovery card remains locked."
        );
    }
}


// ========================================
// ROOM 2 - STRICT EQUALITY PUZZLE
// ========================================

function solveEqualityPuzzle() {
    if (solvedEqualityPuzzle) {
        alert("You have already solved this puzzle.");
        return;
    }

    const answer = prompt(
        "EVIL AI: Which operator compares two values " +
        "without converting their types?\n" +
        "Type == or ===."
    );

    if (answer === null) {
        return "quit";
    }

    if (answer.trim() === "===") {
        solvedEqualityPuzzle = true;
        firewallOffline = true;

        alert(
            "Correct! The firewall is now offline."
        );
    } else {
        alert(
            "Incorrect! The firewall is still active."
        );
    }
}


// ========================================
// ROOM 3 - RETURN PUZZLE
// ========================================

function solveReturnPuzzle() {
    if (solvedReturnPuzzle) {
        alert("You have already solved the final puzzle.");
        return;
    }

    if (!hasRecoveryCard || !firewallOffline) {
        alert(
            "The exit terminal remains locked!\n" +
            "You need the recovery card and the firewall " +
            "must be offline."
        );
        return;
    }

    const answer = prompt(
        "EVIL AI: Which keyword sends a value back " +
        "from a function?\n" +
        "Type the JavaScript keyword."
    );

    if (answer === null) {
        return "quit";
    }

    if (answer.trim().toLowerCase() === "return") {
        solvedReturnPuzzle = true;
        gameOver = true;

        alert(
            "You escaped the Evil AI!\n" +
            "JIGSAW: Every function has an ending.\n" +
            "MISSION SUCCESS."
        );
    } else {
        alert(
            "Incorrect! The exit terminal rejects your answer."
        );
    }
}
// ========================================
// PERSON C - MAIN GAME CONTROLLER
// ========================================

function escapeRoom() {
    let playing = true;

    while (playing && !gameOver) {
        const action = askRoomAction(currentRoom);

        // The player chose to quit.
        if (action === "quit") {
            playing = false;
            continue;
        }

        // Navigate between rooms.
        if (
            action === "bootChamber" ||
            action === "corridor" ||
            action === "core"
        ) {
            currentRoom = action;
            continue;
        }

        // Read the note for the current room.
        if (action === "note") {
            const currentRoomNote = getRoomNote(currentRoom);


            if (currentRoomNote !== null) {
                showRoomNote(currentRoom);
            }

            continue;
        }

        // Room 1 puzzle.
        if (
            action === "terminal" &&
            currentRoom === "bootChamber"
        ) {
            const result = solveConstPuzzle();


            if (result === "quit") {
                playing = false;
            }
            continue;
        }

        // Room 2 puzzle.
        if (
            action === "monitor" &&
            currentRoom === "corridor"
        ) {
            const result = solveEqualityPuzzle();

            if (result === "quit") {
                playing = false;
            }
            continue;
        }

        // Room 3 puzzle.
        if (
            action === "terminal" &&
            currentRoom === "core"
        ) {
            const result = solveReturnPuzzle();
            if (result === "quit") {
                playing = false;
            }
            continue;
        }

        // An unsuccessful choice.
        if (action === "trap") {
            gameOver = true;

            alert(
                "You trusted the Evil AI!\n" +
                "SYSTEM: ESCAPE FAILED.\n" +
                "MISSION TERMINATED."
            );

            continue;
        }
    }
}
// ========================================
// RESET GAME STATE FOR REPLAY
// ========================================

function resetGameState() {
    currentRoom = "bootChamber";

    hasRecoveryCard = false;
    firewallOffline = false;

    solvedConstPuzzle = false;
    solvedEqualityPuzzle = false;
    solvedReturnPuzzle = false;

    gameOver = false;
}

// ========================================
// GAME INITIALIZATION
// ========================================

// Three developers. One villain. Absolutely no CSS.

startAdventure();