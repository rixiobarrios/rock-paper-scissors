<img width="373" src="https://user-images.githubusercontent.com/55994508/72132492-b377ff80-3344-11ea-9baf-6bd3a4b02324.png" alt="logo" style="display: block; margin: 0 auto" />

# Project 1: Rock Paper Scissors Game

## Definition

**Rock paper scissors** (_also known as scissors rock paper and scissors paper stone_) is a hand game usually played between two people, in which each player simultaneously forms one of three shapes with an outstretched hand. These shapes are "rock" (_a closed fist_), "paper" (_a flat hand_), and "scissors" (_a fist with the index finger and middle finger extended, forming a V_). "Scissors" is identical to the two-fingered V sign (_also indicating "victory" or "peace"_) except that it is pointed horizontally instead of being held upright in the air. A simultaneous, zero-sum game, it has only two possible outcomes: a draw, or a win for one player and a loss for the other.(_source: Wikipedia_)

## Link to the Game

[Game of Rock Paper Scissors](https://rixiobarrios.github.io/rock-paper-scissors)

## Game Preview

<img width="746" alt="" src="https://user-images.githubusercontent.com/55994508/72128314-1adb8280-3338-11ea-8718-715ff39c4a96.gif">

## Target Audience

Anyone between the ages of _3 and beyond_.

## Why I chose this game

I thought it was an interesting and original way yo display skills using the tools given and the assigned time. I was particularly inspired by the **Afiniti** version of **Rock Paper Scissors**. In this version the user can play against an IA player who learns from their every move.

I made this game as part of my first project assignment for **General Assembly** coding bootcamp.

Here are other reasons to play **Rock paper Scissors** from the WRPSA (_The World Rock Paper Scissors Association_)

-   No Age Requirement to Play
-   No need for training to compete at a professional level
-   No physical barriers to Play
-   No one is naturally better at the sport then anyone else
-   There is no setup required to start the game
-   No cleanup after the game is over
-   Allows for quick decision making
-   There is no age or gender bias

## History

The earliest form of **Rock Paper Scissors** was created in Japan and is called **Janken**. This is a variation of the Chinese games introduced in the 17th century. **Janken** uses the Rock, Paper and Scissors signs. It is the game that the modern version of **Rock Paper Scissors** derives from directly. Hand-games using gestures to represent the three conflicting elements of rock, paper and scissors have been most common since the modern version of the game was created in the late 19th Century. This was between the Edo and Meiji periods.

## The Game

**Rock Paper Scissors** is a zero sum game that is usually played by two people using their hands and no tools. The idea is to make shapes with an outstretched hand where each shape will have a certain degree of power and will lead to an outcome.

## Instructions

Chose one of three options to play against the computer.
Once you have chosen, the computer would also make a choice.
A win, a lose or a draw message would be posted for each party.
There are three chances to win, lose and draw.

## Hardware Platform

This game is _web-based_ and can be played on desktop and laptop computers. _Mobile_ option for phones and tablets need optimization.

## Competition Mode

Two players

## Rules

-   Rock smashes scissors, rock wins
-   Paper covers Rock, paper wins
-   Scissors cut paper, scissors wins
-   Rock and rock, it's a draw
-   Paper and paper, it's a draw
-   Scissor and Scissors, it's a draw
-   Game ends after score reaches 3 by any outcome

## Strategy

Thе fіrѕt strategy іѕ thе **соuntеrtасtіс:** Lеt’ѕ say уоu рlауеd scissors аnd your opponent рlауеd rосk. Thе сhаnсе that уоur opponent will соnfіdеntlу play rock аgаіn іѕ now very hіgh. What thаt means tо уоu: аntісіраtе thаt аnd рlау paper. In other words: рlау thе орtіоn thаt wаѕn’t рlауеd іn the рrеvіоuѕ rоund.

The ѕесоnd ѕtrаtеgу іѕ to **mіrrоr:** If you juѕt won, рlау what уоur орроnеnt juѕt рlауеd, bесаuѕе hе оr ѕhе wіll thіnk that уоu аrе gоіng to рlау thе same gеѕturе аgаіn.

## The Making of the Game

I have encounter several obstacles while planing and making this game.
Functions under Javascript and behavior under CSS were the most challenging among the many hurtles that I encounter.

## Handmade Wireframes

<img width="746" alt="" src="https://user-images.githubusercontent.com/55994508/72128631-29766980-3339-11ea-9a3a-ae6fef545427.jpg">

## Digital Wireframe

<img width="746" alt="wire2" src="https://user-images.githubusercontent.com/55994508/72128723-6d696e80-3339-11ea-900d-40c713d79775.png">

## Recorded Progress Image 1

<img width="746" alt="screen1" src="https://user-images.githubusercontent.com/55994508/72128863-e2d53f00-3339-11ea-8ab5-352091abd402.png">

## Recorded Progress Image 2

<img width="746" alt="screen2" src="https://user-images.githubusercontent.com/55994508/72128887-f84a6900-3339-11ea-8d1e-b4480c272504.png">

## Recorded Progress Image 3

<img width="746" alt="screen3" src="https://user-images.githubusercontent.com/55994508/72128948-1d3edc00-333a-11ea-979c-7afd2d258801.png">

## Code Sample

```javascript
function computerPlay() {
    computerChoice = choices[Math.floor(Math.random() * choices.length)];
    calculateResults();
}
```

## Features

**Rock Paper Scissors** is currently at the **Silver** Level features functionality.

-   **Bronze/Minimum Viable Product**

-   [x] 3 buttons to pick among 3 options
-   [x] 2 images showing choices made by both player and computer
-   [x] Scoreboard for wins, loses and draws
-   [x] Points top after 3 wins

-   **Silver**

-   [x] Try again and play again buttons to restart the game
-   [x] Animations
-   [ ] Mobile responsive design

-   **Gold**

-   [ ] Name input field
-   [ ] High score storing
-   [ ] Unlockable Achievements graphics
-   [ ] Unlockable Achievements sounds

## User Story

**Rock Paper Scissors** is often used as a fair choosing method between two people, similar to coin flipping, drawing straws, or throwing dice in order to settle a dispute or make an unbiased group decision. Unlike truly random selection methods, however, rock paper scissors can be played with a degree of skill by recognizing and exploiting non-random behavior in opponents.

## Technologies used

-   [HTML](https://www.w3.org/TR/html52/)
-   [CSS](https://www.w3.org/Style/CSS/Overview.en.html)
-   [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## Contribution Guidelines

Submit contribution through my repository for approval through this link:
[Game Repo](https://github.com/rixiobarrios/rock-paper-scissors)

## Bugs

-   Responsive built for mobile devices does not render correctly
-   Buttons may not change the score at the beginning of the game

## Attributions

Game inspired by **Rock Paper Scissors** by Afiniti [afiniti.com](https://www.afiniti.com/corporate/rock-paper-scissors)
Wireframes were made using [wireframe.cc](https://wireframe.cc)
Personal branding logo for this file was created using [freelogodesign.org](https://www.freelogodesign.org)
Rules, instructions and general information for this game were taken from **The World Rock Paper Scissors Association**'s website [wrpsa](https://www.wrpsa.com)
Some graphics for this game were taken from an **Esquire** article titled; **How to Win at Rock Paper Scissors** [esquireme.com](https://www.esquireme.com/content/20945-how-to-win-at-rock-paper-scissors)
Online GIF maker used [hnet.com](https://hnet.com/)
Images edited using [pixlr.com](https://pixlr.com/)
Fonts provided by [dafont.com](https://www.dafont.com)
Background vector created by [freepik.com](https://www.freepik.com/home)

# Special Thanks

**General Assembly Team:**
Esin Saribudak, Jennifer Meade, Jared Morgan, Tiffany Huddleston
**General Assembly Students:**
Sage Kearny, Suzan Adams, Myshawne Stallings, Qusai Fares, Mindy Marmol
**Freecodecamp Volunteers:**
Robert Groves, Kathleen Graham

## Acknowledgement

I would like to give special thanks to our tutors as well as my cohort mates who gave me the golden opportunity to do this wonderful project. I had a good chance to further my knowledge as an aspiring software engineer by doing a lot of research and practicing my newly acquired knowledge. I came to know about so many new things, I am really thankful to everyone who contributed to this experience.
Secondly I would also like to thank my family and friends who helped me a lot in finalizing this project within the limited time frame. A **big** shout out to my friend **Chris Mendoza** for supporting and believing in me and my potential to succeed(_Gracias hermano_).

## Others

`w3chools.com, stackoverflow.com, css-tricks.com, github.com, codepen.io, freecodecamp.org,eloquentjavascript.net, teamtreehouse.com, developer.mozilla.org, medium.com, learnlayout.com, mathjs.org, geeksforgeeks.org, flaviocopes.com, tutorialspoint.com, guru99.com, javascript.info, javatpoint.com, bitdegree.org, java2s.com, mysamplecode.com, edureka.co, support.e2ma.net, hyperlinkcode.com, wikipedia.org, afiniti.com`
