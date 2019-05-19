'use strict'

import test from 'ava'

import TimedTrigger from '../src'
import Trigger from 'trigger'

test('basic creation', t => {
  const trg = new TimedTrigger()
  t.true(trg instanceof Promise)
  t.true(trg instanceof Trigger)
  t.true(trg instanceof TimedTrigger)
})

test('fireAfter', async t => {
  const trg = new TimedTrigger()
  trg.fireAfter(50)
  t.false(await isResolved(trg))
  await delay(100)
  t.true(await isResolved(trg))
})

test('clear', async t => {
  const trg = new TimedTrigger()
  trg.fireAfter(50)
  t.false(await isResolved(trg))
  trg.clear()
  await delay(100)
  t.false(await isResolved(trg))
})

function delay (ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

function isResolved (p, ms = 10) {
  return new Promise((resolve, reject) => {
    p.then(
      v => resolve(true),
      e => reject(e)
    )
    setTimeout(() => resolve(false), ms)
  })
}
