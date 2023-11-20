import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => {
    res.send({ msg: 'Inside playlist' })
  })

router.get('/:id', (req, res) => {
    res.send({ msg: `Playlist ${req.params.id}`  })
})

  export default router