import jwt from 'jsonwebtoken'

const Mutation = {
  login: async (_, { data: { user, password } }, { ad }) => {
    let adUser = null

    try {
      await ad.bind(`${process.env.DOMAIN}\\${user}`, password)

      const { searchEntries } = await ad.search(process.env.SEARCH_DN, {
        filter: `(sAMAccountName=${user})`
      })

      adUser = searchEntries[0]
    } catch (e) {
      console.log(e)
      throw new Error('Incorrect user or password')
    } finally {
      await ad.unbind()
    }

    const payload = {
      user
    }

    const jwtSecret = process.env.JWT_SECRET || 'USE_A_GOOD_SECRET'

    const options = { expiresIn: process.env.JWT_EXPIRATION || '720h' }

    const token = jwt.sign(payload, jwtSecret, options)

    return {
      user: adUser,
      token,
      tokenExp: options.expiresIn
    }
  }
}

export { Mutation }
