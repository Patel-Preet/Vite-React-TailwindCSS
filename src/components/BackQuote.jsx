const BackQuote = () => {
    return(
        <div>
            <blockquote class="text-2xl font-semibold italic text-center text-slate-900">
            When you look
            <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block">
                <span class="relative text-white">annoyed</span>
            </span>
            all the time, people think that you're busy.
            </blockquote>

            <blockquote class="text-2xl font-semibold italic text-center text-slate-900">
            When you look
            <span class="relative">
                <span class="block absolute -inset-1 -skew-y-3 bg-pink-500" aria-hidden="true"></span>
                <span class="relative text-white">annoyed</span>
            </span>
            all the time, people think that you're busy.
            </blockquote>
        </div>
    )
  }
  
  export default BackQuote;