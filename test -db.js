import { createClient } from '@supabase/supabase-js'
import 'dotenv/config' // This loads your .env file

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY)

async function testInsert() {
  const { data, error } = await supabase
    .from('entries')
    .insert([{ title: 'First Entry', content: 'Hello from my local code!' }])
    .select()

  if (error) {
    console.error('Error:', error.message)
  } else {
    console.log('Success! Data saved:', data)
  }
}

testInsert()