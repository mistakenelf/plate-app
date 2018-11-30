import * as api from '../../utils/api'

export function post(req, res) {
  const user = req.body

  api.post('users', { user }).then(response => {
    if (response.user) {
      req.session.user = response.user
    }

    res.set({
      'Content-Type': 'application/json'
    })

    res.end(JSON.stringify(response))
  })
}
