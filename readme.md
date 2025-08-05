[BotBye!](https://botbye.com)  
[BotBye! | Docs](https://botbye.com/docs)

# NodeJS Fastify

## Install

```bash
npm i botbye-node-fastify
```

or

```bash
yarn add botbye-node-fastify
```

## Usage

1. Import `botbye` from `botbye-node-fastify` module:

```javascript
import * as botbye from "botbye-node-fastify";
```

2. Call `init` with your project `server-key`:

```javascript
botbye.init({
    // Use your server-key
    serverKey: '00000000-0000-0000-0000-000000000000',
});
```

3. Use `validateRequest` on handlers where you need bot protection:

```javascript
fastify.get('/', async(request, reply) => {
    // Get token from any place you store it in request (header for example)
    const botbyeToken = getBotByeTokenFromRequest(request)

    const options = {
        token: botbyeToken,
        request,
    }

    const botbyeResponse = await botbye.validateRequest(options);

    const isAllowed = botbyeResponse.result?.isAllowed ?? true;

    if (!isAllowed) {
        reply.code(403).send()
        return;
    }

    reply.send({ hello: "world" })
})
```

### Examples of BotBye API responses:

#### Bot detected:

```json
{
  "reqId": "f77b2abd-c5d7-44f0-be4f-174b04876583",
  "result": {
    "isAllowed": false
  },
  "error": null
}
```

#### Bot not detected:

```json
{
  "reqId": "f77b2abd-c5d7-44f0-be4f-174b04876583",
  "result": {
    "isAllowed": true
  },
  "error": null
}
```

#### Request banned by custom rule:

```json
{
  "reqId": "f77b2abd-c5d7-44f0-be4f-174b04876583",
  "result": {
    "isAllowed": false
  },
  "error": {
    "message": "Banned by rule: MY_CUSTOM_RULE"
  }
}
```

#### Invalid `serverKey`:

```json
{
  "reqId": "f77b2abd-c5d7-44f0-be4f-174b04876583",
  "result": null,
  "error": {
    "message": "[BotBye] Bad Request: Invalid Server Key"
  }
}
```

### Full Code Example

```javascript
import Fastify from "fastify";
import * as botbye from "botbye-node-fastify";

const fastify = Fastify({
    logger: true,
})

botbye.init({
    // Use your server-key
    serverKey: '00000000-0000-0000-0000-000000000000',
});

fastify.get('/', async(request, reply) => {
    // Get token from any place you store it in request (header for example)
    const botbyeToken = getBotByeTokenFromRequest(request)

    const options = {
        token: botbyeToken,
        request,
    }

    const botbyeResponse = await botbye.validateRequest(options);

    const isAllowed = botbyeResponse.result?.isAllowed ?? true;

    if (!isAllowed) {
        reply.code(403).send()
        return;
    }

    reply.send({ hello: "world" })
})

fastify.listen({ port: 3000 })
```