app.factory('terms', [function() {
    var advancedTerms = [
      {
        title: 'BB%: Walk Percentage',
        definition: 'Frequency with which the batter has walked, calculated as walks divided by plate appearances.',
        sentence: 'Lorem ipsum dolor',
        tags: 'bb, %, walk, percentage, bb%'
      },
      {
        title: 'K%: Strikeout Percentage',
        definition: 'Frequency with which the batter has struck out, calculated as strikeouts divided by plate appearances.',
        sentence: 'Lorem ipsum dolor',
        tags: 'k, strikeout, percentage, %, k%'
      },
      {
        title: 'OBP: On Base Percentage',
        definition: 'Rate at which the batter reaches base, calculated as (H+BB+HBP)/(AB+BB+HBP+SF).',
        sentence: 'Lorem ipsum dolor',
        tags: 'on base, obp, on base percentage'
      },
      {
        title: 'SLG: Slugging Percentage',
        definition: 'Average number of total bases per at bat, calculated as Total Bases/AB.',
        sentence: 'Lorem ipsum dolor',
        tags: 'slg, slugging, percentage, slugging percentage, %'
      },
      {
        title: 'wOBA: Weighted On Base Average',
        definition: 'Combines all the different aspects of hitting into one metric, weighting each of them in proportion to their actual run value. While batting average, on-base percentage, and slugging percentage fall short in accuracy and scope, wOBA measures and captures offensive value more accurately and comprehensively.',
        sentence: 'Lorem ipsum dolor',
        tags: 'woba, oba, weighted, weighted on base average'
      },
      {
        title: 'wRC+: Weighted Runs Created Plus',
        definition: 'The most comprehensive rate statistic used to measure hitting performance because it takes into account the varying weights of each offensive action (like wOBA) and then adjusts them for the park and league context in which they took place.',
        sentence: 'Lorem ipsum dolor',
        tags: 'wrc+, wrc, weighted, weighted runs created plus, runs'
      },
      {
        title: 'BsR: Base Running Runs Above Average',
        definition: 'Number of runs above or below average a player has been worth on the bases, based on stolen bases, caught stealing, extra bases taken, outs on the bases, and avoiding double plays. It is the combination of wSB, UBR, and wGDP.',
        sentence: 'Lorem ipsum dolor',
        tags: 'bsr, base running, base running runs above average'
      },
      {
        title: 'Off: Offensive Runs Above Average',
        definition: 'Number of runs above or below average a player has been worth offensively, combining Batting Runs and BsR.',
        sentence: 'Lorem ipsum dolor',
        tags: 'off, offense,offensive, runs, offensive runs above average'
      },
      {
        title: 'Def: Defensive Runs Above Average',
        definition: 'Number of runs above or below average a player has been worth on defense, combining Fielding Runs (Total Zone before 2002, UZR after) and the positional adjustment.',
        sentence: 'Lorem ipsum dolor',
        tags: 'def, defense, defensive, runs, defensive runs above average'
      },
      {
        title: 'WAR: Wins Above Replacement',
        definition: 'A comprehensive statistic that estimates the number of wins a player has been worth to his team compared to a freely available player such as a minor league free agent.',
        sentence: 'Lorem ipsum dolor',
        tags: 'war, wins, wins above replacement'
      },
      {
        title: 'EV: Exit Velocity',
        definition: 'The speed of a baseball after it is hit by a batter.',
        sentence: 'Lorem ipsum dolor',
        tags: 'ev, exit, velocity, batting, exit velocity, statcast'
      },
      {
        title: 'SR: Spin Rate',
        definition: 'The speed the ball is spinning as it leaves the pitcher\'s hand in Revolutions Per Minute, or RPM',
        sentence: 'Lorem ipsum dolor',
        tags: 'sr, spin, rate, pitching, spin rate, statcast'
      },
      {
        title: 'LA: Launch Angle',
        definition: 'The vertical angle at which the ball leaves a player\'s bat after being struck.',
        sentence: 'Lorem ipsum dolor',
        tags: 'la, launch, angle, statcast, launch angle'
      },
      {
        title: 'RE: Route Efficiency',
        definition: 'Determined by dividing the length of the "optimal route" for a fielder by the length of his actual route to the ball.',
        sentence: 'Lorem ipsum dolor',
        tags: 're, route, efficiency, fielding, route efficiency, statcast'
      },
      {
        title: 'CERA: Component ERA',
        definition: 'An estimate of a pitcher\'s ERA based upon the individual components of his statistical line, another statistic that tries to take luck out of the equation.',
        sentence: 'Lorem ipsum dolor',
        tags: 'cera, era, pitching'
      },
      {
        title: 'dERA',
        definition: 'This is a measurement of what a pitcher\'s earned run average would have been, if not for the effects of defense and luck. It uses batters faced, home runs allowed, walks allowed, intentional walks allowed, strikeouts and hit batsmen in a complex mathematical formula.',
        sentence: 'Lorem ipsum dolor',
        tags: 'dera, era'
      },
      {
        title: 'DICE: Defense-independent component ERA',
        definition: 'A mathematical formula that measures pitching performance using home runs allowed, walks, hit by pitch, strikeouts and innings pitched.',
        sentence: 'Lorem ipsum dolor',
        tags: 'dice, defense, pitching, era'
      },
      {
        title: 'DIPS: Defense-independent pitching statistics',
        definition: 'They are a series of statistics (such as DICE) that measure a pitcher\'s effectiveness based only on plays that do not involve fielders: home runs allowed, strikeouts, hit batters, walks, and, more recently, fly ball percentage, ground ball percentage, and line drive percentage.',
        sentence: 'Lorem ipsum dolor',
        tags: 'dips, pitching'
      },
      {
        title: 'ERA+: Adjusted ERA',
        definition: 'Earned run average adjusted for the ballpark and the league average.',
        sentence: 'Lorem ipsum dolor',
        tags: 'era+, era, pitching'
      },
      {
        title: 'IR: Inherited runs',
        definition: 'The number of runners inherited by a relief pitcher that scored while the reliever was in the game.',
        sentence: 'Lorem ipsum dolor',
        tags: 'ir, pitching'
      },
      {
        title: 'PERA: Peripheral ERA',
        definition: 'A pitching statistic that computes the expected ERA, taking into account park-adjusted hits, walks, strikeouts and home runs allowed.',
        sentence: 'Lorem ipsum dolor',
        tags: 'pera, era, pitching'
      },
      {
        title: 'QS: Quality start',
        definition: 'A game in which a pitcher completes six innings, allowing no more than three runs.',
        sentence: 'Lorem ipsum dolor',
        tags: 'qs, pitching'
      },
      {
        title: 'WHIP: Walks and hits per inning pitched',
        definition: 'The average number of walks and hits allowed by the pitcher per inning. (BB + H divided by IP).',
        sentence: 'Lorem ipsum dolor',
        tags: 'whip, pitching'
      },
      {
        title: 'BABIP: Batting average on balls in play',
        definition: 'The rate at which the batter gets a hit when he puts the ball in play, calculated as (H-HR)/(AB-K-HR+SF).',
        sentence: 'Tonight was a BABIP nightmare for the Mets. Just not a break in the world.',
        tags: 'babip, batting, hitting'
      },
      {
        title: 'EqA: Equivalent average',
        definition: 'A stat used to measure hitters independent of ballpark and league effects. It\'s a complex formula that takes into account hits, total bases, walks, hit by pitch, stolen bases, sacrifice hits, sacrifice flies, at-bats and caught stealing. It\'s then normalized for league difficulty.',
        sentence: 'Lorem ipsum dolor',
        tags: 'eqa, batting, hitting'
      },
      {
        title: 'ISO: Isolated power',
        definition: 'Average number of extra bases per at bat, calculated several ways such as SLG minus AVG.',
        sentence: 'Lorem ipsum dolor',
        tags: 'iso, batting, hitting'
      },
      {
        title: 'LIPS: Late-inning pressure situation',
        definition: 'Means any at-bat in the seventh inning or later, with the batter\'s team trailing by three runs or less (or four runs if the bases were loaded).',
        sentence: 'Lorem ipsum dolor',
        tags: 'lips, batting, hitting'
      },
      // {
      //   title: '',
      //   definition: '',
      //   sentence: ''
      // }
    ];

    return advancedTerms;
}]);