# Research Notes: Technologies & Architectures

## Primary Research: BitNet (bitnet.cpp)
- **Concept**: Inference framework optimized for 1-bit LLMs (ternary weights: -1, 0, 1).
- **Architecture**: Fork of `llama.cpp` using custom kernels for extremely fast and low-energy CPU inference.
- **Mobile Relevance**: The efficiency gains (up to 5x speedup and 70% energy reduction on ARM) are critical for Android deployment.
- **Key Models**: Supports BitNet-b1.58-2B and smaller models (0.7B), which are suitable for local mobile execution.

## Reference Technology: llama.cpp
- **Concept**: C/C++ implementation for LLM inference with focus on consumer hardware.
- **Architecture**: Minimal dependencies, highly portable, supports GGUF format.
- **Mobile Relevance**: Industry standard for running local LLMs on mobile via termux or native Android apps (using NDK).

## Reference Technology: uiautomator2
- **Concept**: Python wrapper for Android's UIAutomator2 testing framework.
- **Architecture**: Client-server model (Python client -> Android server).
- **Mobile Relevance**: Allows programmatic control of Android UI elements (text input, clicks, element search). High reliability for standard UI components.

## Reference Technology: scrcpy
- **Concept**: Display and control Android devices over USB/TCP.
- **Architecture**: A server-side Java process (running on Android) that streams video and accepts control inputs.
- **Mobile Relevance**: Fastest way to get raw screen data and inject input events. Essential for visual-based agents.

## Reference Technology: vLLM
- **Concept**: High-throughput LLM serving with PagedAttention.
- **Mobile Relevance**: While primarily for servers, the attention optimization techniques might inspire how we handle context on device.

## Reference Technology: Axolotl
- **Concept**: Configuration-driven LLM fine-tuning.
- **Mobile Relevance**: Useful for fine-tuning small models (SLMs) on specific Android automation datasets (e.g., UI action sequences).

## Preliminary Synthesis
- **Model Choice**: 1-bit models (BitNet) or 4-bit quantized SLMs (Llama-3-1B, Phi-3-mini) are the target.
- **Execution Strategy**: Use `bitnet.cpp` or `llama.cpp` for reasoning; `scrcpy` for fast vision input; `uiautomator2` for precise semantic control.
