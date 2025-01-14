import express from 'express'
    import cors from 'cors'
    import bcrypt from 'bcryptjs'
    import jwt from 'jsonwebtoken'
    import { v4 as uuidv4 } from 'uuid'

    const app = express()
    const PORT = 5000

    app.use(cors())
    app.use(express.json())

    const users = []

    const generateToken = (userId) => {
      return jwt.sign({ userId }, 'your-secret-key', { expiresIn: '1h' })
    }

    app.post('/api/auth/register', async (req, res) => {
      try {
        const { username, email, password } = req.body

        const existingUser = users.find(user => user.email === email)
        if (existingUser) {
          return res.status(400).json({ message: 'User already exists' })
        }

        const hashedPassword = await bcrypt.hash(password, 12)
        const newUser = {
          id: uuidv4(),
          username,
          email,
          password: hashedPassword
        }

        users.push(newUser)

        const token = generateToken(newUser.id)
        res.status(201).json({ token, userId: newUser.id })
      } catch (error) {
        res.status(500).json({ message: 'Something went wrong' })
      }
    })

    app.post('/api/auth/login', async (req, res) => {
      try {
        const { email, password } = req.body

        const existingUser = users.find(user => user.email === email)
        if (!existingUser) {
          return res.status(400).json({ message: 'User not found' })
        }

        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password)
        if (!isPasswordCorrect) {
          return res.status(400).json({ message: 'Invalid credentials' })
        }

        const token = generateToken(existingUser.id)
        res.status(200).json({ token, userId: existingUser.id })
      } catch (error) {
        res.status(500).json({ message: 'Something went wrong' })
      }
    })

    app.get('/api/auth/me', (req, res) => {
      const token = req.headers.authorization?.split(' ')[1]
      if (!token) {
        return res.status(401).json({ message: 'Unauthorized' })
      }

      try {
        const decoded = jwt.verify(token, 'your-secret-key')
        const user = users.find(user => user.id === decoded.userId)
        if (!user) {
          return res.status(404).json({ message: 'User not found' })
        }

        res.status(200).json({ id: user.id, username: user.username, email: user.email })
      } catch (error) {
        res.status(401).json({ message: 'Unauthorized' })
      }
    })

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`)
    })
