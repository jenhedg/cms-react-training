export const Pager = ({ display, prevPage, nextPage }: Pager) => {
	return (
		<div className="pager">
            <h1>HELLO</h1>
			<button onClick={() => prevPage()} className='prev'>
                <i aria-hidden className="fas fa-angle-left"></i>
			</button>
			<span>{display}</span>
			<button onClick={() => nextPage()} className='next'>
                <i aria-hidden className="fas fa-angle-right"></i>
			</button>
		</div>
	);
};