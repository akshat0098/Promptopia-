
import "@/styles/globals.css";

import Nav from '@/components/Nav'
import Provider from '@/components/provider'


export const metadata = {
  title: 'Prompter',
  description: 'Discover and Share AI Prompts',
}


const RootLayout = ({ children })  =>(
  <html lang='en'>
    <body>  
      <Provider>
        <div className='main'>
          <div className='gradient' > </div>
        </div>

        <main className='app' >
          <Nav />
          {children}
        </main>
      </Provider>
    </body>
  </html>

);


export default RootLayout;

