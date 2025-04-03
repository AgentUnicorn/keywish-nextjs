export default function SectionTextArea() {
    return (
        <div className="w-full mt-3">
            <div className="w-[35%]">
                <textarea
                    id="floatingTextarea"
                    rows={4}
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 
                                focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                                content: ''
                                dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Write your note here..."
                >
                </textarea>
            </div>

        </div>
    )
}
