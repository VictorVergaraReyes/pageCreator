import { text } from 'express'
import { Pool } from 'pg'
 
const pool = new Pool({
  host: '',
  user: '',
  password:'',
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
})

const creatingTable = {
    text:''
}

const res =  await pool.query(creatingTable)