## The Golden Rule: 

🦸 🦸‍♂️ `Stop starting and start finishing.` 🏁

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

## Making a plan

1) **Make a drawing of your app. Simple "wireframes"** 
1) **Look at the drawing and imagine using the app. What _state_ do you need to track?** 
1) **Once you have a drawing, name the HTML elements you'll need to realize your vision**
1) **For each HTML element ask: Why do I need this? (i.e., "we need div to display the results in")** 
1) **Once we know _why_ we need each element, think about how to implement the "Why" as a "How" (i.e., `resultsEl.textContent = newResults`)**
1) **Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change? Does any DOM update?**
1) **Think about how to validate each of your features according to a Definition of Done. (Hint: console.log usually helps here.)**
1) **Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.**

Additional considerations:
- Ask: which of your HTML elements need to be hard coded, and which need to be dynamically generated?
- Consider your data model. 
  - What kinds of objects (i.e., Dogs, Friends, Todos, etc) will you need? 
  - What are the key/value pairs? 
  - What arrays might you need? 
  - What needs to live in a persistence layer?
- Is there some state we need to initialize?
- Ask: should any of this work be abstracted into functions? (i.e., is the work complicated? can it be resused?)



Ze Master Plan:
- build out HTML elements per wireframe guidance
  - h2 for current poll title
    -  div for current poll
      - h3 in poll (name 1, name 2)
      - p tag span (votes 1, votes 2)
  - label for question
  - input for question
  - label for input 1
  - input 1
  - label for input 2
  - input 2
  - button to post poll
  - div for holding vote options (vote-here-1, vote-here-2)
      - h3 for voting (name 1, name 2)
      - button to increment
      - button to decrement
  - button to reset poll/publish to past polls
  - h2 for past polls title
  - (div to contain published polls?)

- ACP

- grab DOM elements:
    - 
    - state: current poll header, name 1, name 2, votes 1, votes 2

- ACP

- create event listeners (testing functionality each time):
    - input: question
    - inpput: 1
    - input: 2
    - button: submit
    - button: increment 1
    - button: decrement 1
    - button: increment 2
    - button: decrement 2
    - button: reset/publish

- ACP

-write functions

- ACPT