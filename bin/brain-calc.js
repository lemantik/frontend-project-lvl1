#!/usr/bin/env node
import { RULE_DESCRIPTION, getQuestion } from '../src/games/calc.js';
import runGame from '../src/index.js';

runGame(getQuestion, RULE_DESCRIPTION);
