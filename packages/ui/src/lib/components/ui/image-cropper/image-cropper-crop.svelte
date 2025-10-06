<!--
	Installed from @ieedan/shadcn-svelte-extras
-->

<script lang="ts">
	import { type ButtonElementProps, Button } from '@lib/components/ui/button';
	import { useImageCropperCrop } from './image-cropper.svelte.js';
	import CropIcon from '@lucide/svelte/icons/crop';
  import type { Snippet } from 'svelte';

	let {
		ref = $bindable(null),
		variant = 'default',
		size = 'sm',
		onclick,
		...rest
	}: ButtonElementProps & {children?: Snippet<[]>} = $props();

	const cropState = useImageCropperCrop();
</script>

<Button
	{...rest}
	bind:ref
	{size}
	{variant}
	onclick={(
		e: MouseEvent & {
			currentTarget: EventTarget & HTMLButtonElement;
		}
	) => {
		onclick?.(e);

		cropState.onclick();
	}}
>
  {#if rest.children} 
    {@render rest.children()}
  {:else}
    <CropIcon />
    <span>Crop</span>
  {/if}
</Button>
