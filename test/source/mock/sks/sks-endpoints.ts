/* ©️ 2016 - present FlowCrypt a.s. Limitations apply. Contact human@flowcrypt.com */

import { HandlersDefinition } from '../all-apis-mock';
import { HttpClientErr } from '../lib/api';

const testSksKey = `-----BEGIN PGP PUBLIC KEY BLOCK-----

mQENBGORiLoBCACf/uwJSX00H6sIrquo3bIrPnn0svWhF9NKQnS3b6DljP2tw6w7
oHuEMhBXObJVD18rcucIcBHIeMdGybHGtKftUMqnMsEbI7HS0Chp8PSJwalGWkUY
7djEWrg7guGFTVtgkC+f/VYGjr9WZ/Z4qvhj74jo3S42xZqhK2Uo55cc9K1FeW9o
r+Q+WGUNY29vr6m8cKNkB8A+vFbai1bgq3AHZuQ4NxOsC5oU/d3yA5uFDIQVlwit
oRedKpSW5aUr6fb+pnMQzMWPVJ3xURC4QU8ZKNqZfL4TSw0TIln12Y5rAzFct9fI
cwvVFDNm7cj6ivV96mA7/BZu7dfokYv1o8C1ABEBAAG0LlRlc3QgU0tTIHVzZXIg
PHRlc3RAY3VzdG9tLXNrcy5mbG93Y3J5cHQudGVzdD6JAU4EEwEIADgWIQS3uYUU
G5E+/xcfykDnSIDoh98vAgUCY5GIugIbAwULCQgHAgYVCgkICwIEFgIDAQIeAQIX
gAAKCRDnSIDoh98vAlpYB/0YZTUwq4gOjdGIBy3hy7bf4YC1Djg8uXG/fMrXTqzN
uomi4OW7TBU/ud/TPN9Pm2Ac1OhPotft8z6sVrei94ZDRE++w8XwnPN4+wez1nAz
Ho+4mbJ08/Vgrw+I5lysCXJosFJdnex6WNqxSwhutiTE6scn/JZSVyTP6z4e3/kI
gzi5OMZlZt5OOijjw2XSE49mjfGkU9vLpJtFHNmurZ1md8c8YBV+2eA85PTZHw8v
wJpWOfHF3TjVNKlrpvPAfqVsvUqFrvEd1gm/SS/0aWmjLXPlSUXbB4yUhqLzatnX
XQVNZJ+X6n2/wHqiIypAY+VccNcNqzWdpz9i8ENmQV8+uQENBGORiLoBCADQrtb5
5qOGz6SojFjQIYaKNhuYt7vOFWeTrkQz+0WGDku7VuWQ+kThM419cmO41ut6VOxt
yfVLmyT10hQVy44gB4GIHv2z+MNDRa4HO6gk/6i4jd1sKsbtaB1RQtwU/e0PA/aD
VPdWsAbxJM7V2/m8OFv0WIqoGfcyuC6T8bM6bNisXzVLtR003i2vgavz/8UzAWWp
57Vcmy9iTTfExIrMFjCieZpIGeAjcPl6Vod4My0TzMcBy/Vjqx+oJ2mm001F21hW
oEDPhk39h8OHf6oDh5iQ1RdtmrucCfD9z9Ub3mGhLjd4jXXPlWG1XeG6aSwfyQhk
3/HtTw8Uj5pl+Cy1ABEBAAGJATYEGAEIACAWIQS3uYUUG5E+/xcfykDnSIDoh98v
AgUCY5GIugIbDAAKCRDnSIDoh98vAjEWB/9kQIUfv8COF/8lIBYdIrT926WkmiT7
8vrwltWXjj29QxFzpGdUpcq0rYnlpbUWY1v8fEbRk8yLJ3Ov3LN7V2gd/jKIJ3Dq
Q8OZp8W+rG/dPNEDgJ1DtBEJ0P+FB4wOLrq8ln3A3YL9HEIkdBGI7FFc1yyDl/Mk
dSXOtf/5FWSvXjM8KzhLypvvPlIzgcwCI/zApIpuBp7PplOgEkMJP07j+596D3aL
TX/4oIoeRrXu4csAJhSXUnDzkYi4L0SUALWyCa6xhmeCelrNXRx6d1jWoB+1imDQ
pEEgWM8skofFtmXLcWu29li9yf1V6w7C+A8Dp8cMStJ0OWglF2J0Luas
=PhzD
-----END PGP PUBLIC KEY BLOCK-----
`;

const johnDoeExampleCom = `-----BEGIN PGP PUBLIC KEY BLOCK-----

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
=+zWD
-----END PGP PUBLIC KEY BLOCK-----`;


export const mockSksEndpoints: HandlersDefinition = {
  '/pks/lookup?search=john.doe%40example.com&fingerprint=on&exact=on&options=mr&op=index': async () => { // by email
    return `info:1:10\npub:094C3CBA696FA009F6015C473B635D858A1DB5E0:1:4096:1600067427::\nuid:John Doe <john.doe@example.com>:1600067427::`;
  },
  '/pks/lookup?op=get&search=0x3B635D858A1DB5E0&options=mr': async () => { // by longid
    return johnDoeExampleCom; // for john.doe@example.com
  },
  '/pks/lookup?op=get&search=0x094C3CBA696FA009F6015C473B635D858A1DB5E0&options=mr': async () => { // by fp
    return johnDoeExampleCom; // for john.doe@example.com
  },
  '/pks/lookup?search=nobody%40example.com&fingerprint=on&exact=on&options=mr&op=index': async () => { // by email
    throw new HttpClientErr('Pubkey not found', 404);
  },
  '/pks/lookup?search=test%40custom-sks.flowcrypt.test&fingerprint=on&exact=on&options=mr&op=index': async () => { // by email
    return `info:1:10\npub:57631589DB543FB10B765C2F5F0CEF862479A17C:1:2048:1600067427::\nuid:Test <test@custom-sks.flowcrypt.test>:1600067427::`;
  },
  '/pks/lookup?op=get&search=0x5F0CEF862479A17C&options=mr': async () => { // by fp
    return testSksKey; // for test@custom-sks.flowcrypt.test
  },
};
