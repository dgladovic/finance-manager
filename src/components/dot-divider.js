/* eslint-disable no-plusplus */
export default function DotDivider({amount}){

    const renderAmount = () =>{
        const divs = [];
        for (let i = 0; i < amount; i++) {
          divs.push(<div style={{
            height: '4px',
            width: '4px',
            background: 'rgb(0,175,120)',
            borderRadius: '50%',
            border:'thick'
        }}
            key={i} />);
        }
        return divs;
    }

return( 
        <div style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            paddingLeft:'8px', 
            paddingRight:'8px'
        }}>
        {renderAmount()}
        </div>
    )
}