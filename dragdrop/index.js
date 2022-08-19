const columns = document.querySelectorAll(".column")
const box = document.querySelectorAll(".list-group-item")

columns.forEach((c) => {
    c.addEventListener("dragover", (e) => {
        e.preventDefault()
        const afterElement = getDragAfterElement(c, e.clientX)
        const dragging = document.querySelector(".dragging")
        if (!afterElement) c.appendChild(dragging)
        else c.insertBefore(dragging, afterElement)
    })
})

box.forEach((b) => {
    b.addEventListener("dragstart", () => {
        b.classList.add("dragging")
    })
    b.addEventListener("dragend", () => {
        b.classList.remove("dragging")
    })
})

function getDragAfterElement(column, x) {
    const draggingElement = [
        ...column.querySelectorAll(".dragging:not(.dragging)"),
    ]

    return draggingElement.reduce(
        (closet, child) => {
            const box = child.getBoundingClientRect()
            const offset = x - box.left - box.width / 2
            if (offset < 0 && offset > closet.offset)
                return { offset: offset, element: child }
            else return close
        },
        { offset: Number.NEGATIVE_INFINITY }
    ).element
}
