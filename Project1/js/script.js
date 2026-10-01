// DOM Elements
const consoleEl = document.getElementById('console');
const emptyMsg = document.getElementById('empty-msg');
let hasOutput = false;

/**
 * Adds a line to the custom console window
 * @param {string} text - Content to display
 * @param {string} type - 'prompt', 'separator', 'success', or 'output'
 */
function addLine(text, type) {
    if (!hasOutput) { 
        emptyMsg.style.display = 'none'; 
        hasOutput = true; 
    }
    
    const line = document.createElement('div');
    line.className = `console-line console-${type || 'output'}`;
    
    if (type === 'separator') {
        line.textContent = '─────────────────────────────────────';
    } else if (type === 'prompt') {
        line.innerHTML = `<span class="console-prompt">▸</span> ${text}`;
    } else if (type === 'success') {
        line.textContent = text;
    } else {
        line.innerHTML = `<span style="margin-left:22px">${text}</span>`;
    }
    
    consoleEl.appendChild(line);
    consoleEl.scrollTop = consoleEl.scrollHeight;
}

// Module Logic Definitions
const modules = {
    1: function() {
        addLine('MODULE_01 :: Data Storage', 'prompt');
        const hero = "Iron Man", year = 2008, status = "active";
        addLine(`  hero = "${hero}"`);
        addLine(`  year = ${year} (const)`);
        addLine(`  status = "${status}" (var)`);
        addLine('  ✓ Variables initialized successfully');
    },
    2: function() {
        addLine('MODULE_02 :: String Injection', 'prompt');
        const name = "Neo", level = 99;
        addLine(`  Template: "Agent ${name} — Clearance Level ${level}"`);
        addLine(`  Output: Agent Neo — Clearance Level 99`);
        addLine('  ✓ Interpolation resolved');
    },
    3: function() {
        addLine('MODULE_03 :: Boolean Gates', 'prompt');
        const access = true, clearance = 5, blocked = false;
        addLine(`  access && clearance > 3 → ${access && clearance > 3}`);
        addLine(`  blocked || clearance < 2 → ${blocked || clearance < 2}`);
        addLine(`  !blocked → ${!blocked}`);
        addLine('  ✓ Logic gates evaluated');
    },
    4: function() {
        addLine('MODULE_04 :: Decision Paths', 'prompt');
        const score = 85;
        const grade = score >= 90 ? "A" : score >= 80 ? "B" : "C";
        addLine(`  Score: ${score}`);
        addLine(`  Ternary result → Grade: "${grade}"`);
        if (score >= 80) addLine('  Branch taken: PASS threshold met');
        addLine('  ✓ Conditional paths resolved');
    },
    5: function() {
        addLine('MODULE_05 :: Iteration Cycles', 'prompt');
        let sum = 0;
        for (let i = 1; i <= 5; i++) sum += i;
        addLine(`  Sum of [1..5] via for-loop = ${sum}`);
        const items = ["alpha", "beta", "gamma"];
        addLine(`  for...of over array: ${items.join(", ")}`);
        addLine('  ✓ Iteration cycles completed');
    },
    6: function() {
        addLine('MODULE_06 :: List Operations', 'prompt');
        const nums = [3, 7, 1, 9, 4];
        addLine(`  Original: [${nums}]`);
        addLine(`  Sorted:   [${[...nums].sort((a,b) => a-b)}]`);
        addLine(`  Doubled:  [${nums.map(n => n*2)}]`);
        addLine(`  Evens:    [${nums.filter(n => n%2===0)}]`);
        addLine('  ✓ Array transformations applied');
    },
    7: function() {
        addLine('MODULE_07 :: Key-Value Maps', 'prompt');
        const codename = "Ghost", skill = 95;
        addLine(`  Object: { codename: "${codename}", skill: ${skill} }`);
        addLine(`  Destructured → name="${codename}", lvl=${skill}`);
        addLine('  ✓ Object operations complete');
    },
    8: function() {
        addLine('MODULE_08 :: Callable Units', 'prompt');
        const greet = (name) => `Welcome, ${name}.`;
        const double = x => x * 2;
        addLine(`  greet("Operator") → "${greet("Operator")}"`);
        addLine(`  double(21) → ${double(21)}`);
        addLine('  ✓ Functions executed');
    }
};

/**
 * Runs a single module by index
 * @param {number} num - Module number (1-8)
 */
function runFunction(num) {
    const cards = document.querySelectorAll('.card');
    const targetCard = cards[num - 1];
    
    // Visual feedback
    targetCard.classList.add('executed');
    setTimeout(() => targetCard.classList.remove('executed'), 1500);
    
    // Add separator if not first run
    if (hasOutput) addLine('', 'separator');
    
    // Execute logic
    if (modules[num]) modules[num]();
}

/**
 * Runs all modules sequentially with delay
 */
function runAll() {
    if (hasOutput) addLine('', 'separator');
    addLine('══════ BATCH EXECUTION INITIATED ══════', 'success');
    
    for (let i = 1; i <= 8; i++) {
        setTimeout(() => runFunction(i), i * 200);
    }
}