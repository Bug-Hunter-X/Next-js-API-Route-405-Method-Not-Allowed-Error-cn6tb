```javascript
// pages/api/hello.js
export default function handler(req, res) {
  // Fix: Add a check for req.method
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ message: 'Missing name' });
  }

  res.status(200).json({ message: `Hello ${name}!` });
}
```