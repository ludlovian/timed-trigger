# timed-trigger
Trigger with timeout

## API

### TimedTrigger
`t = new TimedTrigger()`

creates a new [Trigger](https://github.com/ludlovian/trigger) with additional methods

### fireAfter
`t.fireAfter(ms, value)`

automatically fires this trigger with `value` after `ms`

### clear
`t.clear()`

clears any timers
