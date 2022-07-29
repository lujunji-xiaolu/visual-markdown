#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]
use tauri::Manager;
use window_vibrancy::apply_mica;

fn main() {
    tauri::Builder::default()
        .setup(|app| {
            let window = app.get_window("main").unwrap();

            #[cfg(target_os = "windows")]
            apply_mica(&window)
                .expect("Unsupported platform! 'apply_mica' is only supported on Windows 11");

            #[cfg(debug_assertions)] // only include this code on debug builds
            {
                window.open_devtools();
            }

            // Mica Background in Tauri JS https://github.com/tauri-apps/window-vibrancy/issues/52
            window.minimize().unwrap();
            window.unminimize().unwrap();

            window.show().unwrap();

            window.set_focus().unwrap();

            Ok(())
        })
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
