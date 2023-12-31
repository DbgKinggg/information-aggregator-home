import DragHandle from "./drag-handle";

function SampleUseSidebar() {
    return (
        <div className="h-full w-full border flex flex-col group rounded-3xl relative items-center justify-center px-4 py-6"
            onContextMenu={(e) => e.preventDefault()}
        >
            <DragHandle />
            <span className="text-3xl md:text-5xl mx-auto">👈🏻</span>
            <p className="text-2xl font-semibold text-center mt-3">
                {`It's Real!`}
            </p>
            <p className="text-center mt-2 text-muted-foreground">Drag item from the sidebar to the right</p>
        </div>
    );
}


export default SampleUseSidebar;