let people = [
    {
      "id": "bfe7e64c-04c7-461e-bfb8-ee1a18f8819c",
      "name": "Hannah",
      "age": 29
    },
    {
      "id": "6e98e2a9-38d4-4b51-bbe4-0c584d16cc96",
      "name": "William",
      "age": 20
    },
    {
      "id": "b1d5f423-858d-4bcb-b7b2-8e1b5fb5e5ed",
      "name": "Olivia",
      "age": 35
    },
    {
      "id": "e45fbf4c-4d4e-4e3a-b3de-cccd0381cc70",
      "name": "Noah",
      "age": 43
    },
    {
      "id": "1c07d548-c2f2-4aa8-b34e-30854e9f4151",
      "name": "Sophia",
      "age": 27
    },
    {
      "id": "bd6eac94-c1d8-40ce-b94f-743d97270205",
      "name": "Ethan",
      "age": 31
    },
    {
      "id": "1daef6c2-c6cf-4d28-9044-4e4a83490d2e",
      "name": "Ava",
      "age": 45
    },
    {
      "id": "43c09989-9b80-4148-a76e-d7d6667113b3",
      "name": "Mason",
      "age": 38
    },
    {
      "id": "22a59a92-9507-41d8-b8ab-02c1e31ebc9e",
      "name": "Emma",
      "age": 24
    },
    {
      "id": "2c5bc5c5-3d38-4f4c-8b6c-0e3721e6b43c",
      "name": "Liam",
      "age": 27
    },
    {
      "id": "b9771ea6-46d6-40db-bac9-6f8e6a7c6e52",
      "name": "Chloe",
      "age": 32
    },
    {
      "id": "4e4b4e1f-5697-4c71-bb13-ec108f1a26d9",
      "name": "Jacob",
      "age": 30
    },
    {
      "id": "0cc0f748-47d2-4f71-b0c1-b98d0c16c312",
      "name": "Isabella",
      "age": 36
    },
    {
      "id": "69f5c342-5a57-42af-95ba-d9e9c5a172e5",
      "name": "James",
      "age": 22
    },
    {
      "id": "ee105e0d-daaa-4417-b91c-23bda9df474d",
      "name": "Mia",
      "age": 26
    },
    {
      "id": "a0af9d28-0b8c-45d5-b93a-dc5b373236f8",
      "name": "Benjamin",
      "age": 39
    },
    {
      "id": "49b1e2df-3c3b-4d1a-b9ec-25a8cf7abf6d",
      "name": "Avery",
      "age": 21
    },
    {
      "id": "43c7facc-4696-427f-88c1-3e3cfe0b6d9b",
      "name": "Lucas",
      "age": 33
    }
  ]
  // 각각 대문자 A부터 대문자 Z까지로 시작하는 사람들을 찾아서 이름, 나이를 출력
  /**/////////////////////////////////////////////////////////////////////////////////////////////**/
  /**/let aCode = 'A'.charCodeAt(0);//////////////////////////////////////////////////////////////**/
  /**/let zCode = 'Z'.charCodeAt(0);//////////////////////////////////////////////////////////////**/
  /**/let arr = Array(zCode - aCode + 1).fill('a').map((_, i) => String.fromCharCode(i + aCode));/**/
  /**/////////////////////////////////////////////////////////////////////////////////////////////**/
  
  let result = arr.map(a => {
    let person = people.find(p => p.name.map(a));
    if (person) {
      return `${a}로 시작하는 사람은 ${person.name}, ${person.age}세`;
    }
  }).filter(b => b !== undefined);
  
  /**/////////////////////////////////**/
  /**/console.log(result.join('\n'));/**/
  /**/////////////////////////////////**/
