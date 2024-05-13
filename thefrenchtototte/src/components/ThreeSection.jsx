import { Canvas, useLoader } from "@react-three/fiber"
import { PerspectiveCamera, OrbitControls } from "@react-three/drei"
import { useState } from "react"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import * as THREE from "three"

export const ThreeSection = () => {
	const gltf = useLoader(GLTFLoader, "/model/finition.glb")
	const colorNone = "#777777"
	const [color0, setColor0] = useState("#ecb664")
	const [color1, setColor1] = useState("#257255")
	const [color2, setColor2] = useState("#a32b07")

	const material = new THREE.MeshPhysicalMaterial({
		color: new THREE.Color(color1),
		roughness: 0,
		transmission: 1.5,
		thickness: 0.5,
	})
	const material1 = new THREE.MeshPhysicalMaterial({
		color: new THREE.Color(color2),
		roughness: 0,
		transmission: 0.4,
		thickness: 0.1,
	})

	console.log(gltf)
	return (
		<section className='mt-60 w-full max-w-[1024px] px-5'>
			<div className='relative !h-[640px] -mb-[640px] z-10 p-5 w-full flex flex-col justify-between pointer-events-none'>
				<div>
					<h1 className='mb-1 text-5xl leading-[2.7rem] text-brown-dark '>votre tototte sur mesure</h1>
					<p className='leading-7 max-w-[400px]'>
						Jouez avec les couleurs et trouvez la
						<b className='text-brown-dark'> The French Tototte de vos reves</b>
					</p>
				</div>
				<div className='flex flex-col gap-2 pointer-events-auto'>
					<div className='flex justify-end gap-2'>
						<p className='text-brown-dark font-medium'>Finition</p>
						<input type='color' value={color0} onChange={(e) => setColor0(e.target.value)} />
					</div>
					<div className='flex justify-end gap-2'>
						<p className='text-brown-dark font-medium'>Ornement</p>
						<input type='color' value={color1} onChange={(e) => setColor1(e.target.value)} />
					</div>
					<div className='flex justify-end gap-2'>
						<p className='text-brown-dark font-medium'>Sucette</p>
						<input type='color' value={color2} onChange={(e) => setColor2(e.target.value)} />
					</div>
				</div>
			</div>
			<Canvas className='!h-[640px] -hover:cursor-pointer border border-brown-dark rounded-xl'>
				<PerspectiveCamera makeDefault position={[-3, 5, 5]} />
				<pointLight intensity={25} position={[2.5, 1, -1]} />
				<pointLight intensity={25} position={[-2.5, 1, -1]} />
				<pointLight intensity={25} position={[1.5, -2, 2]} />
				<pointLight intensity={25} position={[-1.8, -0.5, 2]} />
				<mesh
					geometry={gltf.scene.children[0].geometry}
					position={gltf.scene.children[0].position}
					scale={gltf.scene.children[0].scale}
					material={material}
				></mesh>
				<mesh
					geometry={gltf.scene.children[1].geometry}
					position={gltf.scene.children[1].position}
					scale={gltf.scene.children[1].scale}
				>
					<meshStandardMaterial color={color0} />
				</mesh>
				<mesh
					geometry={gltf.scene.children[2].geometry}
					position={gltf.scene.children[2].position}
					scale={gltf.scene.children[2].scale}
				>
					<meshStandardMaterial color={colorNone} />
				</mesh>
				<mesh
					geometry={gltf.scene.children[3].geometry}
					position={gltf.scene.children[3].position}
					scale={gltf.scene.children[3].scale}
				>
					<meshStandardMaterial color={colorNone} />
				</mesh>
				<mesh
					geometry={gltf.scene.children[4].geometry}
					position={gltf.scene.children[4].position}
					scale={gltf.scene.children[4].scale}
					material={material1}
				>
					{/* <meshStandardMaterial color={color2} /> */}
				</mesh>
				<mesh
					geometry={gltf.scene.children[5].geometry}
					position={gltf.scene.children[5].position}
					scale={gltf.scene.children[5].scale}
				>
					<meshStandardMaterial color={color0} />
				</mesh>
				<mesh
					geometry={gltf.scene.children[6].geometry}
					position={gltf.scene.children[6].position}
					scale={gltf.scene.children[6].scale}
				>
					<meshStandardMaterial color={color0} />
				</mesh>
				<OrbitControls enablePan={false} maxDistance={7} minDistance={3} />
			</Canvas>
		</section>
	)
}
