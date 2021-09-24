# @visma/react-app-locale-utils

## Usage

`.env`

```sh
# Available locales, first is the default locale
REACT_APP_LOCALES=["da-DK","en-US","es-ES","fi-FI","lt-LT","lv-LV","nb-NO","nl-NL","ro-RO","sv-SE"]
```

### `useLocale`

```js
import useDateFnsLocale from '@visma/react-app-locale-utils/lib/useLocale';

const [locale, setLocale] = useLocale();
const [lang] = locale.split('-');
```

### `useDateFnsLocale`

```js
import { formatRelative, subDays } from 'date-fns';
import useDateFnsLocale from '@visma/react-app-locale-utils/lib/useDateFnsLocale';

const locale = useDateFnsLocale();
formatRelative(subDays(new Date(), 3), new Date(), { locale });
//=> "viime torstaina klo 19:26"
```

### `useMUILocale`

```js
import { createTheme, ThemeProvider } from '@mui/material/styles';
import useMUILocale from '@visma/react-app-locale-utils/lib/useMUILocale';

const locale = useMUILocale();
const theme = createTheme(
  {
    palette: {
      primary: { main: '#1976d2' },
    },
  },
  locale
);

<ThemeProvider theme={theme}>
  <App />
</ThemeProvider>;
```
