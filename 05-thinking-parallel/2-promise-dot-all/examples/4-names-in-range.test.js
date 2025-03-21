import { fetchUserById } from '../../../lib/fetch-user-by-id/index.js';

/**
 * Fetches all users in a range and returns an array of their names.
 *
 * @async
 * @param {number} [firstId = 1] - The first id to fetch.
 * @param {number} [lastId = 1] - The last id to fetch.
 * @returns {Promise<Array>} - An array of the users' names.
 *
 * @throws {Error} {status number}: {status text}
 */
const namesInRange = async (firstId = 1, lastId = 1) => {
  // debugger;

  // gather all user response promises in an array
  const responsePromises = [];
  for (let id = firstId; id <= lastId; id++) {
    const next = fetchUserById(id);
    responsePromises.push(next);
  }

  // wait for all of the promises to resolve
  //  if one rejects, this whole function will reject!
  const responses = await Promise.all(responsePromises);

  // throw an error if any response was not OK
  for (const res of responses) {
    if (!res.ok) {
      throw new Error(`${res.status}: ${res.statusText}`);
    }
  }

  // parse all responses into user data promises
  //   still in an array, still in the same order!
  const userPromises = responses.map((response) => response.json());
  const users = await Promise.all(userPromises);

  // create an array containing each user's name in order
  const names = users.map((user) => `${user.id}. ${user.name}`);
  return names;
};

// --- --- tests --- ---

describe("namesInRange: returns an array of all users's names in order", () => {
  it('lists user 3', async () => {
    const actual = await namesInRange(3, 3);
    expect(actual).toEqual(['3. Clementine Bauch']);
  });
  it('lists users 1-3', async () => {
    const actual = await namesInRange(1, 3);
    expect(actual).toEqual([
      '1. Leanne Graham',
      '2. Ervin Howell',
      '3. Clementine Bauch',
    ]);
  });
  it('lists users 7-10', async () => {
    const actual = await namesInRange(7, 10);
    expect(actual).toEqual([
      '7. Kurtis Weissnat',
      '8. Nicholas Runolfsdottir V',
      '9. Glenna Reichert',
      '10. Clementina DuBuque',
    ]);
  });
});

console.log('=== === === the callstack is empty === === ===');
