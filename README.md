# Ophiomormous

## A collection of useful Python functions ported to JavaScript

### Functions

#### all

Returns `true` if all values are `true`

```js
import { all } from 'venom'

all([1, true, 0, false])
```

#### any

Returns `true` if only one value is `true`

```js
import { any } from 'venom'

any([1, true, 0, false])
```

#### divmod

Returns the quotient and remainder in a list

```js
import { divmod } from 'venom'

divmod(36, 7)
```

#### enumerate

Returns a list of object with the character as the value and its index as the key

```js
import { enumerate } from 'venom'

enumerate("Hello")
```

#### max

Returns the largest number

```js
import { max } from 'venom'

max([9, 89, 8, 3, 0])
```

#### min

Returns the smallest number

```js
import { min } from 'venom'

min([9, 89, 8, 3, 0])
```

#### range

Returns a list of numbers through a specified range and step

```js
import { range } from 'venom'

range(7, 39, 8)
```

#### sum

Returns the sum of all values

```js
import { sum } from 'venom'

sum([9, 7, 3, 22, 4])
```
