import {redirect} from 'next/navigation'


export const metadata = {
 title: 'Dashboard - Next',
 description: 'Dashboard - Next',
};

export default function HomePage() {

  redirect('/dashboard/counter')

  return (
    <>
      {/* <h1>Just keep doing</h1> */}
    </>
  )
}
