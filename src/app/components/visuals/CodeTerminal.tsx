import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

const codeSnippets = [
  {
    filename: 'KafkaConsumer.java',
    lang: 'java',
    lines: [
      { text: '@KafkaListener', color: '#c792ea' },
      { text: '(topics = "order-events")', color: '#89ddff' },
      { text: 'public void consume(', color: '#82aaff' },
      { text: '    ConsumerRecord<String,', color: '#f78c6c' },
      { text: '    OrderEvent> record) {', color: '#f78c6c' },
      { text: '', color: '' },
      { text: '  log.info("Processing: {}",', color: '#c3e88d' },
      { text: '    record.key());', color: '#c3e88d' },
      { text: '', color: '' },
      { text: '  orderService', color: '#82aaff' },
      { text: '    .process(record.value());', color: '#82aaff' },
      { text: '}', color: '#89ddff' },
    ],
  },
  {
    filename: 'UserController.java',
    lang: 'java',
    lines: [
      { text: '@RestController', color: '#c792ea' },
      { text: '@RequestMapping("/api/v1")', color: '#89ddff' },
      { text: 'public class UserController {', color: '#ffcb6b' },
      { text: '', color: '' },
      { text: '  @GetMapping("/users/{id}")', color: '#89ddff' },
      { text: '  public ResponseEntity<User>', color: '#82aaff' },
      { text: '    getUser(@PathVariable', color: '#82aaff' },
      { text: '    Long id) {', color: '#f78c6c' },
      { text: '', color: '' },
      { text: '    return ResponseEntity.ok(', color: '#c3e88d' },
      { text: '      userService.findById(id)', color: '#c3e88d' },
      { text: '    );', color: '#c3e88d' },
      { text: '  }', color: '#89ddff' },
      { text: '}', color: '#89ddff' },
    ],
  },
  {
    filename: 'DSA_Solution.java',
    lang: 'java',
    lines: [
      { text: '// Two Sum - O(n)', color: '#546e7a' },
      { text: 'public int[] twoSum(', color: '#82aaff' },
      { text: '    int[] nums, int target) {', color: '#f78c6c' },
      { text: '', color: '' },
      { text: '  Map<Integer, Integer> map', color: '#ffcb6b' },
      { text: '    = new HashMap<>();', color: '#ffcb6b' },
      { text: '', color: '' },
      { text: '  for (int i = 0;', color: '#c792ea' },
      { text: '       i < nums.length; i++) {', color: '#c792ea' },
      { text: '    int comp = target - nums[i];', color: '#f78c6c' },
      { text: '    if (map.containsKey(comp))', color: '#89ddff' },
      { text: '      return new int[]{', color: '#c3e88d' },
      { text: '        map.get(comp), i};', color: '#c3e88d' },
      { text: '    map.put(nums[i], i);', color: '#82aaff' },
      { text: '  }', color: '#89ddff' },
      { text: '}', color: '#89ddff' },
    ],
  },
];

export function CodeTerminal() {
  const [snippetIndex, setSnippetIndex] = useState(0);
  const [visibleLines, setVisibleLines] = useState(0);
  const [cursorVisible, setCursorVisible] = useState(true);

  const currentSnippet = codeSnippets[snippetIndex];

  // Blink cursor
  useEffect(() => {
    const blink = setInterval(() => setCursorVisible((v) => !v), 530);
    return () => clearInterval(blink);
  }, []);

  // Type lines one by one
  useEffect(() => {
    setVisibleLines(0);
    const totalLines = currentSnippet.lines.length;

    let lineIndex = 0;
    const interval = setInterval(() => {
      lineIndex++;
      setVisibleLines(lineIndex);
      if (lineIndex >= totalLines) {
        clearInterval(interval);
        // After all lines typed, wait then switch to next snippet
        setTimeout(() => {
          setSnippetIndex((prev) => (prev + 1) % codeSnippets.length);
        }, 3000);
      }
    }, 180);

    return () => clearInterval(interval);
  }, [snippetIndex]);

  return (
    <div className="w-[340px] select-none">
      {/* Terminal window */}
      <div className="rounded-xl border border-white/[0.06] bg-[#0a0a0f]/90 backdrop-blur-md shadow-[0_20px_60px_rgba(0,0,0,0.5)] overflow-hidden">
        {/* Title bar */}
        <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/[0.06] bg-white/[0.02]">
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
          </div>
          <motion.span
            key={currentSnippet.filename}
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[11px] text-zinc-500 font-mono tracking-wide"
          >
            {currentSnippet.filename}
          </motion.span>
          <div className="w-[52px]" /> {/* Spacer for centering */}
        </div>

        {/* Code area */}
        <div className="p-4 font-mono text-[12px] leading-[1.7] min-h-[280px] overflow-hidden">
          {currentSnippet.lines.map((line, i) => (
            <div
              key={`${snippetIndex}-${i}`}
              className="flex items-center gap-3 transition-all duration-200"
              style={{
                opacity: i < visibleLines ? 1 : 0,
                transform: i < visibleLines ? 'translateY(0)' : 'translateY(4px)',
              }}
            >
              <span className="text-zinc-700 text-[10px] w-4 text-right select-none flex-shrink-0">
                {i + 1}
              </span>
              <span style={{ color: line.color || '#d4d4d8' }}>
                {line.text}
                {/* Show blinking cursor at the end of the last visible line */}
                {i === visibleLines - 1 && (
                  <span
                    className="inline-block w-[6px] h-[14px] ml-[1px] align-middle"
                    style={{
                      backgroundColor: cursorVisible ? '#6366f1' : 'transparent',
                      transition: 'background-color 0.1s',
                    }}
                  />
                )}
              </span>
            </div>
          ))}
        </div>

        {/* Status bar */}
        <div className="flex items-center justify-between px-4 py-1.5 border-t border-white/[0.06] bg-white/[0.02]">
          <span className="text-[10px] text-zinc-600 font-mono">Java</span>
          <span className="text-[10px] text-zinc-600 font-mono">UTF-8</span>
          <span className="text-[10px] text-indigo-500/60 font-mono flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500/60 animate-pulse" />
            live
          </span>
        </div>
      </div>
    </div>
  );
}
