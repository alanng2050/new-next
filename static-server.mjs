// Import the framework and instantiate it
import fs from 'node:fs'
import path from 'node:path'
import Fastify from 'fastify'
import fastifyStatic from '@fastify/static'
import fastifyHelmet from '@fastify/helmet'

const fastify = Fastify({
  logger: false,
})

const rootDir = path.resolve(process.cwd(), 'out')
fastify.register(fastifyStatic, { root: rootDir, prefix: '/' })
fastify.register(fastifyHelmet)

fs.readdir(rootDir, (err, files) => {
  const routes = []
  files.map((fi) => {
    if (fi.endsWith('.html')) routes.push(fi.replace('.html', ''))
  })

  fastify.get('/', (req, reply) => {
    reply.sendFile(`sign-in.html`)
  })

  for (let route of routes) {
    fastify.get(`/${route}`, (req, reply) => {
      reply.sendFile(`${route}.html`)
    })
  }

  fastify.listen({ port: 3000 }, (err) => {
    if (err) console.error(err)
    else console.log('listening on 3000')
  })
})
