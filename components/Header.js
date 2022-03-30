
export const Header = () => {
  return (
    <div className='h-20 w-full flex items-center justify-center'>
        <div className='h-full w-full flex items-center justify-between'>
            <h1 className='text-2xl uppercase font-black'>coin camp</h1>
            <div className='w-1/2 flex items-center justify-end font-black uppercase tracking-wide'>
                <p >Coins: <span className='text-[#623AFF]'>13421</span></p>
                <p className='ml-8'>Mkt Cap: <span className='text-[#623AFF]'>2.12T</span></p>
                <p className='ml-8'>24h Vol: <span className='text-[#623AFF]'>78.6B</span></p>
            </div>
        </div>
        
    </div>
  )
}
