const verbal = [
  ['vocabulary','Vocabulary','Meaning, context, and word roots.'],['synonyms','Synonyms','Words with the same or nearly the same meaning.'],['antonyms','Antonyms','Words with opposite meanings.'],['analogies','Analogies','Relationships between pairs of words.'],['sentence-completion','Sentence Completion','Choosing the best word or phrase for a sentence.'],['reading-comprehension','Reading Comprehension','Main ideas, inference, and evidence.'],['grammar','Grammar','Sentence structure, usage, and parts of speech.'],['error-identification','Error Identification','Spotting grammar and usage errors.'],['paragraph-arrangement','Paragraph Arrangement','Ordering sentences into a logical paragraph.'],['context-clues','Context Clues','Using surrounding words to infer meaning.']
];
const numerical = [
  ['fractions','Fractions','Parts of a whole and fraction operations.'],['decimals','Decimals','Decimal addition, subtraction, multiplication, and division.'],['percentages','Percentages','Percent, increase, decrease, and conversions.'],['ratio-proportion','Ratio and Proportion','Comparing quantities and solving proportions.'],['number-series','Number Series','Finding patterns and the next term.'],['number-analogy','Number Analogy','Applying a numerical relationship to a new pair.'],['average','Average','Finding the mean of a set of numbers.'],['profit-loss','Profit and Loss','Cost, selling price, profit, and loss.'],['simple-interest','Simple Interest','Interest earned on a principal over time.'],['speed-distance-time','Speed, Distance, and Time','Solving rate, distance, and time problems.'],['time-work','Time and Work','Work rates and completion times.'],['age-problems','Age Problems','Present, past, and future age equations.'],['basic-algebra','Basic Algebra','Linear equations and expressions.'],['geometry','Geometry','Area, perimeter, volume, and right triangles.'],['data-interpretation','Data Interpretation','Reading tables and quantitative summaries.']
];
const all = [...verbal.map(x=>({id:x[0],name:x[1],section:'verbal',description:x[2]})), ...numerical.map(x=>({id:x[0],name:x[1],section:'numerical',description:x[2]}))];
const verbalQuestions = [
  ['Which study action best supports this topic?',['Review definitions and examples','Ignore context','Guess every answer','Skip practice'],0,'Review definitions and examples, then test yourself.'],
  ['Which choice is the strongest strategy?',['Read the full sentence','Choose the longest option','Pick the first option','Avoid checking evidence'],0,'Read the full sentence and use evidence before answering.'],
  ['What should you do when two choices look similar?',['Compare their exact meanings','Pick the shorter one','Choose randomly','Skip the question'],0,'Compare the exact meanings and how each fits the context.'],
  ['A good reviewer should record:',['Errors and the rule behind them','Only correct guesses','Unrelated facts','Nothing'],0,'Recording the error and its rule makes review useful.'],
  ['What improves accuracy most?',['Slow, deliberate practice first','Rushing every item','Changing answers without reason','Memorizing titles only'],0,'Build accuracy first, then add speed.'],
  ['When a passage gives a clue, you should:',['Use it as evidence','Ignore it','Replace it with an opinion','Assume the opposite'],0,'Use textual clues as evidence for the answer.'],
  ['A useful elimination step is to remove answers that are:',['Clearly unrelated','Grammatically correct','Supported by the passage','Possible'],0,'Remove choices that do not fit the meaning or context.'],
  ['What should you check after an answer?',['Why it is correct','Only the score','The font size','The topic color'],0,'Understanding the reason matters more than a lucky guess.'],
  ['A focused practice set should be:',['Short and repeatable','Impossible to finish','Randomly changed','Done only once'],0,'Short, repeatable sets support consistent progress.'],
  ['The best final check is to ask:',['Does this fit the evidence?','Is this the longest answer?','Did I guess quickly?','Is this option blue?'],0,'Confirm that your answer fits the evidence and wording.']
];
const numericalQuestions = [
  ['Which first step is most reliable?',['Write down the known values','Guess the answer','Ignore the units','Multiply everything'],0,'Write the known values and identify what is being asked.'],
  ['When a problem includes units, you should:',['Keep them consistent','Delete them','Change them randomly','Ignore them'],0,'Consistent units prevent avoidable errors.'],
  ['What should you do before calculating?',['Choose the correct formula or operation','Round everything immediately','Skip the question','Use every number twice'],0,'Identify the relationship and operation first.'],
  ['A useful estimate helps you:',['Check whether an answer is reasonable','Replace all calculations','Avoid reading','Guarantee a perfect score'],0,'Estimation is a quick reasonableness check.'],
  ['If two values are compared, identify the:',['Original and changed values','Font and color','Question number only','Longest number'],0,'Know which value is the base and which is the change.'],
  ['For a multi-step problem, you should:',['Show each step','Do it mentally only','Skip the formula','Round after every step'],0,'Showing steps makes errors easier to find.'],
  ['If an answer seems too large, you should:',['Recheck the operation and units','Submit immediately','Delete the work','Choose the largest option'],0,'Recheck the operation, scale, and units.'],
  ['A ratio is easiest to compare after:',['Reducing or converting it consistently','Changing one term only','Ignoring the denominator','Adding both terms'],0,'Put ratios in a common form before comparing.'],
  ['A percentage is a number per:',['One hundred','Ten thousand','One','Two'],0,'Percent literally means per hundred.'],
  ['The best final check is to ask:',['Does the result answer the question?','Is it the longest option?','Did I calculate fastest?','Is it a round number?'],0,'Check the result against the wording and units.']
];
function makeQuestions(topic){const rows=topic.section==='verbal'?verbalQuestions:numericalQuestions;return rows.map((r,i)=>({topic_id:topic.id,question_index:i,prompt:`${r[0]} (${topic.name})`,options:r[1],correct_index:r[2],explanation:r[3]}));}
module.exports={topics:all,makeQuestions};
