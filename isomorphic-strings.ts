type ObjectType = {
  [key: string]: string;
};

function isIsomorphic(s: string, t: string): boolean {
  // check for corner case when two string are not equals by length
  if (s.length !== t.length) return false;
  // create map for s string mapping
  const smap: ObjectType = {};
  // create map for t string mapping
  const tmap: ObjectType = {};
  // iterate over strings:
  for (let i = 0; i < s.length; i++) {
    // take char from string s
    const schar = s[i];
    // take char from string t
    const tchar = t[i];
    // check that we have mapping in smap and it is valid with current tchar
    if (schar in smap && smap[schar] !== tchar) {
      // if no return false
      return false;
    }
    // check that we have mapping in tmap and it is valid with current schar
    if (tchar in tmap && tmap[tchar] !== schar) {
      // if no return false
      return false;
    }
    // create mapping for schar
    smap[schar] = tchar;
    // create mapping for tchar
    tmap[tchar] = schar;
  }
  // return true if all mappings are valid
  return true;
}
