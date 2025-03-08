I have a mock system on Windows that displays an alert to fans if the Toronto Maple Leafs or Toronto Raptors are swept or are close to being swept in a regular season series.

An "at-risk" warning is a message box with a warning icon. This message triggers if before the last game against a specified opponent in a season, they had lost all previous games against that opponent in that season. It appears on the fans' computers on the day of the last game against that opponent that season, but before that game starts. This warning is a heads-up for the fans, because if they lose this game, a "swept" error will appear.

A "swept" error is a message box with an error icon. This message triggers if they lose all games against an opponent that season. It appears on the fans' computers shortly after the end of the last game that season against that opponent.

---

Message Box Titles (use the team's short name name, without the city):
- "Leafs could be swept" (when the Leafs are at risk)
- "Raptors could be swept" (when the Raptors are at risk)
- "Leafs swept" (when the Leafs are at swept)
- "Raptors swept" (when the Raptors are swept)

Message Box Text (use the full team name):
- "The Toronto Maple Leafs could be swept by the <opponent name>." (when the Leafs are at risk)
- "The Toronto Raptors could be swept by the <opponent name>." (when the Raptors are at risk)
- "The Toronto Maple Leafs have been swept by the <opponent name>." (when the Leafs are swept)
- "The Toronto Raptors have been swept by the <opponent name>." (when the Raptors are swept)

---

The user can know when to expect warnings and/or errors by checking the game's page on espn.com and checking the regular season series section. The user can also check any game page for a later date to know when to expect the system to trigger warnings or errors. The messages come up automatically no matter if the user checks the game page or not.
- If it says "<opponent's initials> leads <any number>-0" with one game left (e.g. BOS leads 3-0), the warning is triggered.
- If it says "<opponent's initials> wins <any number>-0" (e.g. BOS wins 4-0), the error is triggered.

This system works for any team, not just the Leafs and Raptors, although I am mostly focusing on them.
