<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PluginController extends Controller
{

    /**
     * @throws \Illuminate\Validation\ValidationException
     */
    public function install(Request $request): \Illuminate\Http\JsonResponse
    {
        $this->validate($request, [
            'plugin_id' => 'required|string'
        ]);
        $responseSuccess = rand(0, 2);
        if ($responseSuccess) {
            return response()->json(['success' => true, 'plugin_id' => $request->plugin_id]);
        }
        return response()->json(['success' => false, 'plugin_id' => $request->plugin_id], 500);
    }

    /**
     * @throws \Illuminate\Validation\ValidationException
     */
    public function remove(Request $request): \Illuminate\Http\JsonResponse
    {
        $this->validate($request, [
            'plugin_id' => 'required|string'
        ]);
        $responseSuccess = rand(0, 2);
        if ($responseSuccess) {
            return response()->json(['success' => true, 'plugin_id' => $request->plugin_id]);
        }
        return response()->json(['success' => false, 'plugin_id' => $request->plugin_id], 500);
    }
}
