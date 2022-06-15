import {
    useAppDispatch,
    useAppSelector
} from '../store/hooks';
import {
    selectCount,
    increment,
    decrement,
    incrementByAmount
} from '../store/counter/counterSlice';
import {
    selectKayne,
    getKayneQuote,
} from '../store/kayne/kayneSlice';

const Counter = () => {
  const dispatch = useAppDispatch();
    
  const countValue = useAppSelector(selectCount);
  const { data, pending, error } = useAppSelector(selectKayne);

  return (
    <div>
        <h1>Counter: {countValue}</h1>
        <button onClick={()=> dispatch(increment())}>Increment</button><br />
        <button onClick={()=> dispatch(decrement())}>Decrement</button><br />
        <button onClick={()=> dispatch(incrementByAmount(33))}>Increment by 33</button><br />

        <h1>Kayne: {data?.quote}</h1>
        {pending && <p className='text-[blue]'>Loading...</p>}
        {error && <p className='text-[red]'>Something went wrong!</p>}
        <button onClick={()=> dispatch(getKayneQuote())} disabled={pending}>
            Gen Kayne Quote
        </button>
    </div>
  )
}

export default Counter;