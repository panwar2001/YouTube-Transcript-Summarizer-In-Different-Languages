const Loader=()=>{
    const spinStyle={
    width:'50px',
    height:'50px',
    border: '12px solid #f3f3f3',
    borderRadius: '50%',
    borderTop: '16px solid #3498db',
    animation: 'spin .5s linear infinite'
    }
    const positionLoader={
      paddingLeft:'43%',
      paddingTop:'5%'
    }
    return <div style={positionLoader}>
    <div style={spinStyle} ></div>
    <style jsx>{`
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    `}</style>
    </div>
    }
    export default Loader;