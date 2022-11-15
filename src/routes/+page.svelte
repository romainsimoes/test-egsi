<script>
	import { onMount } from 'svelte'
	import { supabase } from '$lib/supabaseClient'

	let users = []
	onMount(async () => {
		const { data, error } = await supabase
			.from('user')
			.select('*')
		console.log(data)
		console.log(error)
		users = data
	})

</script>

<p>{JSON.stringify(users)}</p>