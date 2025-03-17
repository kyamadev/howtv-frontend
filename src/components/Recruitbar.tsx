export default function Recruitbar() {
    return (
        <>
            <div style={{ width: '100%', height: '100%', left: 0, top: 0, position: 'absolute', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 1078, display: 'inline-flex' }}>
                <div style={{ width: 107, height: 432, justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex' }}>
                    <img style={{ width: 146, height: 328, transform: 'rotate(180deg)', transformOrigin: 'top left' }} src="https://placehold.co/146x328" />
                    <div style={{ width: 151, height: 328, transform: 'rotate(180deg)', transformOrigin: 'top left', background: '#6F5CF9' }} />
                    <img style={{ width: 146, height: 328 }} src="https://placehold.co/146x328" />
                    <div style={{ width: 151, height: 328, background: 'white' }} />
                </div>
                <div style={{ height: 432, justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex' }}>
                    <img style={{ width: 146, height: 328, transform: 'rotate(180deg)', transformOrigin: 'top left' }} src="https://placehold.co/146x328" />
                    <div style={{ width: 151, height: 328, transform: 'rotate(180deg)', transformOrigin: 'top left', background: 'white' }} />
                    <img style={{ width: 146, height: 328 }} src="https://placehold.co/146x328" />
                    <div style={{ width: 151, height: 328, background: '#6F5CF9' }} />
                </div>
            </div>
        </>
    )
}